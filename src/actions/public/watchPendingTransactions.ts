import type { PublicClient, Transport } from '../../clients/index.js'
import type {
  Chain,
  Filter,
  GetTransportConfig,
  Hash,
} from '../../types/index.js'
import { observe } from '../../utils/observe.js'
import { poll } from '../../utils/poll.js'
import { createPendingTransactionFilter } from './createPendingTransactionFilter.js'
import { getFilterChanges } from './getFilterChanges.js'
import { uninstallFilter } from './uninstallFilter.js'

export type OnTransactionsParameter = Hash[]
export type OnTransactionsFn = (transactions: OnTransactionsParameter) => void

type PollOptions = {
  /**
   * Whether or not the transaction hashes should be batched on each invocation.
   * @default true
   */
  batch?: boolean
  /**
   * Polling frequency (in ms). Defaults to Client's pollingInterval config.
   * @default client.pollingInterval
   */
  pollingInterval?: number
}

export type WatchPendingTransactionsParameters<
  TTransport extends Transport = Transport,
> = {
  /** The callback to call when an error occurred when trying to get for a new block. */
  onError?: (error: Error) => void
  /** The callback to call when new transactions are received. */
  onTransactions: OnTransactionsFn
} & (GetTransportConfig<TTransport>['type'] extends 'webSocket'
  ?
      | {
          batch?: never
          /**
           * Whether or not the WebSocket Transport should poll the JSON-RPC, rather than using `eth_subscribe`.
           * @default false
           */
          poll?: false
          pollingInterval?: never
        }
      | (PollOptions & {
          /**
           * Whether or not the WebSocket Transport should poll the JSON-RPC, rather than using `eth_subscribe`.
           * @default true
           */
          poll?: true
        })
  : PollOptions & {
      poll?: true
    })

export type WatchPendingTransactionsReturnType = () => void

/**
 * Watches and returns pending transaction hashes.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchPendingTransactions.html
 * - JSON-RPC Methods:
 *   - When `poll: true`
 *     - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
 *     - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.
 *
 * This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#ontransactions).
 *
 * @param client - Client to use
 * @param parameters - {@link WatchPendingTransactionsParameters}
 * @returns A function that can be invoked to stop watching for new pending transaction hashes. {@link WatchPendingTransactionsReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchPendingTransactions } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = await watchPendingTransactions(client, {
 *   onTransactions: (hashes) => console.log(hashes),
 * })
 */
export function watchPendingTransactions<
  TTransport extends Transport,
  TChain extends Chain | undefined,
>(
  client: PublicClient<TTransport, TChain>,
  {
    batch = true,
    onError,
    onTransactions,
    poll: poll_,
    pollingInterval = client.pollingInterval,
  }: WatchPendingTransactionsParameters<TTransport>,
) {
  const enablePolling =
    typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket'

  const pollPendingTransactions = () => {
    const observerId = JSON.stringify([
      'watchPendingTransactions',
      client.uid,
      batch,
      pollingInterval,
    ])
    return observe(observerId, { onTransactions, onError }, (emit) => {
      let filter: Filter<'transaction'>

      const unwatch = poll(
        async () => {
          try {
            if (!filter) {
              try {
                filter = await createPendingTransactionFilter(client)
                return
              } catch (err) {
                unwatch()
                throw err
              }
            }

            const hashes = await getFilterChanges(client, { filter })
            if (hashes.length === 0) return
            if (batch) emit.onTransactions(hashes)
            else hashes.forEach((hash) => emit.onTransactions([hash]))
          } catch (err) {
            emit.onError?.(err as Error)
          }
        },
        {
          emitOnBegin: true,
          interval: pollingInterval,
        },
      )

      return async () => {
        if (filter) await uninstallFilter(client, { filter })
        unwatch()
      }
    })
  }

  const subscribePendingTransactions = () => {
    let active = true
    let unsubscribe = () => (active = false)
    ;(async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ['newPendingTransactions'],
          onData(data: any) {
            if (!active) return
            const transaction = data.result
            onTransactions([transaction])
          },
          onError(error: Error) {
            onError?.(error)
          },
        })
        unsubscribe = unsubscribe_
        if (!active) unsubscribe()
      } catch (err) {
        onError?.(err as Error)
      }
    })()
    return unsubscribe
  }

  return enablePolling
    ? pollPendingTransactions()
    : subscribePendingTransactions()
}
