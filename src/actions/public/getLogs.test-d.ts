import { expectTypeOf, test } from 'vitest'

import { publicClient } from '../../_test/index.js'
import { getLogs } from './getLogs.js'
import type { AbiEvent } from 'abitype'

test('event: const assertion', async () => {
  const event = {
    inputs: [
      {
        indexed: true,
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  } as const
  const logs = await getLogs(publicClient, {
    event,
  })
  expectTypeOf(logs[0]['args']).toEqualTypeOf<{
    from: `0x${string}`
    to: `0x${string}`
    value: bigint
  }>()
})

test('event: defined inline', async () => {
  const logs = await getLogs(publicClient, {
    event: {
      inputs: [
        {
          indexed: true,
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
  })
  expectTypeOf(logs[0]['args']).toEqualTypeOf<{
    from: `0x${string}`
    to: `0x${string}`
    value: bigint
  }>()
})

test('event: declared as `AbiEvent`', async () => {
  const event: AbiEvent = {
    inputs: [
      {
        indexed: true,
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  }
  const logs = await getLogs(publicClient, {
    event,
  })
  expectTypeOf(logs[0]['args']).toEqualTypeOf<readonly unknown[]>()
})
