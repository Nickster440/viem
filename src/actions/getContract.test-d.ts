import type {
  Abi,
  Address,
  ExtractAbiEventNames,
  ExtractAbiFunctionNames,
  ResolvedConfig,
} from 'abitype'
import { parseAbi } from 'abitype'
import { expectTypeOf, test } from 'vitest'

import {
  wagmiContractConfig,
  publicClient,
  localHttpUrl,
  anvilChain,
} from '../_test/index.js'
import { createWalletClient, http } from '../clients/index.js'
import { getContract } from './getContract.js'
import type { Account, Chain } from '../types/index.js'

const walletClient = createWalletClient({
  account: '0x',
  chain: anvilChain,
  transport: http(localHttpUrl),
})
const walletClientWithoutAccount = createWalletClient({
  chain: anvilChain,
  transport: http(localHttpUrl),
})
const walletClientWithoutChain = createWalletClient({
  account: '0x',
  transport: http(localHttpUrl),
})

type ReadFunctionNames = ExtractAbiFunctionNames<
  typeof wagmiContractConfig.abi,
  'pure' | 'view'
>
type WriteFunctionNames = ExtractAbiFunctionNames<
  typeof wagmiContractConfig.abi,
  'nonpayable' | 'payable'
>
type EventNames = ExtractAbiEventNames<typeof wagmiContractConfig.abi>

test('public and wallet client', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    publicClient,
    walletClient,
  })

  expectTypeOf(contract).toMatchTypeOf<{
    createEventFilter: {
      [_ in EventNames]: Function
    }
    estimateGas: {
      [_ in WriteFunctionNames]: Function
    }
    read: {
      [_ in ReadFunctionNames]: Function
    }
    simulate: {
      [_ in WriteFunctionNames]: Function
    }
    watchEvent: {
      [_ in EventNames]: Function
    }
    write: {
      [_ in WriteFunctionNames]: Function
    }
  }>()
})

test('no wallet client', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    publicClient,
  })

  expectTypeOf(contract).toMatchTypeOf<{
    createEventFilter: {
      [_ in EventNames]: Function
    }
    estimateGas: {
      [_ in WriteFunctionNames]: Function
    }
    read: {
      [_ in ReadFunctionNames]: Function
    }
    simulate: {
      [_ in WriteFunctionNames]: Function
    }
    watchEvent: {
      [_ in EventNames]: Function
    }
  }>()
  expectTypeOf(contract).not.toMatchTypeOf<{
    write: {
      [_ in WriteFunctionNames]: Function
    }
  }>()
})

test('no public client', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    walletClient,
  })

  expectTypeOf(contract).toMatchTypeOf<{
    write: {
      [_ in WriteFunctionNames]: Function
    }
  }>()
  expectTypeOf(contract).not.toMatchTypeOf<{
    createEventFilter: {
      [_ in EventNames]: Function
    }
    estimateGas: {
      [_ in WriteFunctionNames]: Function
    }
    read: {
      [_ in ReadFunctionNames]: Function
    }
    simulate: {
      [_ in WriteFunctionNames]: Function
    }
    watchEvent: {
      [_ in EventNames]: Function
    }
  }>()
})

test('without const assertion on `abi`', () => {
  const abi = [
    {
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ]
  const contract = getContract({
    ...wagmiContractConfig,
    abi,
    publicClient,
    walletClient,
  })

  expectTypeOf(contract).toMatchTypeOf<{
    createEventFilter: {
      [_ in string]: Function
    }
    estimateGas: {
      [_: string]: Function
    }
    read: {
      [_: string]: Function
    }
    simulate: {
      [_: string]: Function
    }
    watchEvent: {
      [_: string]: Function
    }
    write: {
      [_: string]: Function
    }
  }>()
})

test('`abi` declared as `Abi` type', () => {
  const abi: Abi = []
  const contract = getContract({
    ...wagmiContractConfig,
    abi,
    publicClient,
    walletClient: walletClient,
  })

  contract.createEventFilter.Transfer({ from: '0x' })

  expectTypeOf(contract).toMatchTypeOf<{
    createEventFilter: {
      [_ in string]: Function
    }
    estimateGas: {
      [_: string]: Function
    }
    read: {
      [_: string]: Function
    }
    simulate: {
      [_: string]: Function
    }
    watchEvent: {
      [_: string]: Function
    }
    write: {
      [_: string]: Function
    }
  }>()
})

test('`abi` defined inline', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'from',
            type: 'address',
          },
          { indexed: true, name: 'to', type: 'address' },
          {
            indexed: true,
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { name: 'from', type: 'address' },
          { name: 'to', type: 'address' },
          { name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    publicClient,
    walletClient,
  })
  type Abi_ = [
    {
      anonymous: false
      inputs: [
        {
          indexed: true
          name: 'from'
          type: 'address'
        },
        { indexed: true; name: 'to'; type: 'address' },
        {
          indexed: true
          name: 'tokenId'
          type: 'uint256'
        },
      ]
      name: 'Transfer'
      type: 'event'
    },
    {
      inputs: [{ name: 'owner'; type: 'address' }]
      name: 'balanceOf'
      outputs: [{ name: ''; type: 'uint256' }]
      stateMutability: 'view'
      type: 'function'
    },
    {
      inputs: [
        { name: 'from'; type: 'address' },
        { name: 'to'; type: 'address' },
        { name: 'tokenId'; type: 'uint256' },
      ]
      name: 'safeTransferFrom'
      outputs: []
      stateMutability: 'nonpayable'
      type: 'function'
    },
  ]
  type ReadFunctionNames = ExtractAbiFunctionNames<Abi_, 'pure' | 'view'>
  type WriteFunctionNames = ExtractAbiFunctionNames<
    Abi_,
    'nonpayable' | 'payable'
  >
  type EventNames = ExtractAbiEventNames<Abi_>

  expectTypeOf(contract).toMatchTypeOf<{
    createEventFilter: {
      [_ in string]: Function
    }
    estimateGas: {
      [_ in WriteFunctionNames]: Function
    }
    read: {
      [_ in ReadFunctionNames]: Function
    }
    simulate: {
      [_ in WriteFunctionNames]: Function
    }
    watchEvent: {
      [_ in EventNames]: Function
    }
    write: {
      [_ in WriteFunctionNames]: Function
    }
  }>()
})

test('overloaded function', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    publicClient,
    walletClient,
  })
  expectTypeOf(contract.write.safeTransferFrom)
    .parameter(0)
    .toEqualTypeOf<
      | readonly [
          ResolvedConfig['AddressType'],
          ResolvedConfig['AddressType'],
          ResolvedConfig['BigIntType'],
        ]
      | readonly [
          ResolvedConfig['AddressType'],
          ResolvedConfig['AddressType'],
          ResolvedConfig['BigIntType'],
          ResolvedConfig['AddressType'],
        ]
    >()
  expectTypeOf(contract.write.safeTransferFrom).toBeCallableWith([
    '0x…',
    '0x…',
    123n,
  ])
  expectTypeOf(contract.write.safeTransferFrom).toBeCallableWith([
    '0x…',
    '0x…',
    123n,
    '0x…',
  ])
})

test('with and without wallet client `account`', () => {
  const contractWithAccount = getContract({
    ...wagmiContractConfig,
    publicClient,
    walletClient,
  })
  const contractWithoutAccount = getContract({
    ...wagmiContractConfig,
    publicClient,
    walletClient: walletClientWithoutAccount,
  })

  expectTypeOf(contractWithAccount.write.approve).parameters.toEqualTypeOf<
    [
      args: readonly [`0x${string}`, bigint],
      options?: { account?: Account | Address },
    ]
  >()
  expectTypeOf(contractWithoutAccount.write.approve).parameters.toEqualTypeOf<
    [
      args: readonly [`0x${string}`, bigint],
      options: { account: Account | Address },
    ]
  >()
})

test('with and without wallet client `chain`', () => {
  const contractWithChain = getContract({
    ...wagmiContractConfig,
    publicClient,
    walletClient,
  })
  const contractWithoutChain = getContract({
    ...wagmiContractConfig,
    publicClient,
    walletClient: walletClientWithoutChain,
  })

  expectTypeOf(contractWithChain.write.approve).parameters.toEqualTypeOf<
    [args: readonly [`0x${string}`, bigint], params?: { chain?: Chain | null }]
  >()
  expectTypeOf(contractWithoutChain.write.approve).parameters.toEqualTypeOf<
    [
      args: readonly [`0x${string}`, bigint],
      params: { chain: Chain | null | undefined },
    ]
  >()
})

test('no read functions', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'from',
            type: 'address',
          },
          { indexed: true, name: 'to', type: 'address' },
          {
            indexed: true,
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          { name: 'from', type: 'address' },
          { name: 'to', type: 'address' },
          { name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    publicClient,
    walletClient,
  })
  type Abi_ = [
    {
      anonymous: false
      inputs: [
        {
          indexed: true
          name: 'from'
          type: 'address'
        },
        { indexed: true; name: 'to'; type: 'address' },
        {
          indexed: true
          name: 'tokenId'
          type: 'uint256'
        },
      ]
      name: 'Transfer'
      type: 'event'
    },
    {
      inputs: [
        { name: 'from'; type: 'address' },
        { name: 'to'; type: 'address' },
        { name: 'tokenId'; type: 'uint256' },
      ]
      name: 'safeTransferFrom'
      outputs: []
      stateMutability: 'nonpayable'
      type: 'function'
    },
  ]
  type WriteFunctionNames = ExtractAbiFunctionNames<
    Abi_,
    'nonpayable' | 'payable'
  >
  type EventNames = ExtractAbiEventNames<Abi_>

  expectTypeOf(contract).toMatchTypeOf<{
    createEventFilter: {
      [_ in EventNames]: Function
    }
    estimateGas: {
      [_ in WriteFunctionNames]: Function
    }
    simulate: {
      [_ in WriteFunctionNames]: Function
    }
    watchEvent: {
      [_ in EventNames]: Function
    }
    write: {
      [_ in WriteFunctionNames]: Function
    }
  }>()
  expectTypeOf(contract).not.toMatchTypeOf<{
    read: {
      [_ in string]: Function
    }
  }>()
})

test('no write functions', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'from',
            type: 'address',
          },
          { indexed: true, name: 'to', type: 'address' },
          {
            indexed: true,
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    publicClient,
    walletClient,
  })
  type Abi_ = [
    {
      anonymous: false
      inputs: [
        {
          indexed: true
          name: 'from'
          type: 'address'
        },
        { indexed: true; name: 'to'; type: 'address' },
        {
          indexed: true
          name: 'tokenId'
          type: 'uint256'
        },
      ]
      name: 'Transfer'
      type: 'event'
    },
    {
      inputs: [{ name: 'owner'; type: 'address' }]
      name: 'balanceOf'
      outputs: [{ name: ''; type: 'uint256' }]
      stateMutability: 'view'
      type: 'function'
    },
  ]
  type ReadFunctionNames = ExtractAbiFunctionNames<Abi_, 'pure' | 'view'>
  type EventNames = ExtractAbiEventNames<Abi_>

  expectTypeOf(contract).toMatchTypeOf<{
    createEventFilter: {
      [_ in EventNames]: Function
    }
    read: {
      [_ in ReadFunctionNames]: Function
    }
    watchEvent: {
      [_ in EventNames]: Function
    }
  }>()
  expectTypeOf(contract).not.toMatchTypeOf<{
    write: {
      [_ in WriteFunctionNames]: Function
    }
  }>()
})

test('no events', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    abi: [
      {
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { name: 'from', type: 'address' },
          { name: 'to', type: 'address' },
          { name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    publicClient,
    walletClient,
  })
  type Abi_ = [
    {
      inputs: [{ name: 'owner'; type: 'address' }]
      name: 'balanceOf'
      outputs: [{ name: ''; type: 'uint256' }]
      stateMutability: 'view'
      type: 'function'
    },
    {
      inputs: [
        { name: 'from'; type: 'address' },
        { name: 'to'; type: 'address' },
        { name: 'tokenId'; type: 'uint256' },
      ]
      name: 'safeTransferFrom'
      outputs: []
      stateMutability: 'nonpayable'
      type: 'function'
    },
  ]
  type ReadFunctionNames = ExtractAbiFunctionNames<Abi_, 'pure' | 'view'>
  type WriteFunctionNames = ExtractAbiFunctionNames<
    Abi_,
    'nonpayable' | 'payable'
  >

  expectTypeOf(contract).toMatchTypeOf<{
    estimateGas: {
      [_ in WriteFunctionNames]: Function
    }
    read: {
      [_ in ReadFunctionNames]: Function
    }
    simulate: {
      [_ in WriteFunctionNames]: Function
    }
    write: {
      [_ in WriteFunctionNames]: Function
    }
  }>()
  expectTypeOf(contract).not.toMatchTypeOf<{
    createEventFilter: {
      [_ in string]: Function
    }
    watchEvent: {
      [_ in string]: Function
    }
  }>()
})

test('empty abi', () => {
  const contract = getContract({
    ...wagmiContractConfig,
    abi: [],
    publicClient,
    walletClient,
  })
  expectTypeOf(contract).toEqualTypeOf<{}>()
})

test('argument permutations', async () => {
  const abi = parseAbi([
    // functions
    'function nonpayableWithoutArgs()',
    'function nonpayableWithArgs(string x, uint256 y)',
    'function payableWithoutArgs() payable',
    'function payableWithArgs(string x, uint256 y) payable',
    'function pureWithoutArgs() pure returns (string)',
    'function pureWithArgs(string x, uint256 y) pure returns (string)',
    'function viewWithoutArgs() view returns (string)',
    'function viewWithArgs(string x, uint256 y) view returns (string)',

    'function overloadedNonpayable()',
    'function overloadedNonpayable(string x)',
    'function overloadedNonpayable(string x, uint256 y)',
    'function overloadedNonpayable2(string x)',
    'function overloadedNonpayable2(string x, uint256 y)',

    'function overloadedView() view returns (string)',
    'function overloadedView(string x) view returns (string)',
    'function overloadedView(string x, uint256 y) view returns (string)',
    'function overloadedView2(string x) view returns (string)',
    'function overloadedView2(string x, uint256 y) view returns (string)',

    // events
    'event WithoutInputs()',
    'event WithIndexedNamedInputs(string indexed x, uint256 indexed y)',
    'event WithIndexedUnnamedInputs(string indexed, uint256 indexed)',
    'event WithUnindexedInputs(string x, uint256 y)',
    'event WithMixedNamedInputs(string indexed x, uint256 y)',
    'event WithMixedUnnamedInputs(string indexed, uint256 y)',
  ])
  const contract = getContract({
    ...wagmiContractConfig,
    abi,
    publicClient,
    walletClient,
  })

  // estimateGas
  contract.estimateGas.nonpayableWithoutArgs({ account: '0x' })
  contract.estimateGas.nonpayableWithArgs(['foo', 69n], { account: '0x' })
  contract.estimateGas.payableWithoutArgs({ account: '0x', value: 1n })
  contract.estimateGas.payableWithArgs(['foo', 69n], {
    account: '0x',
    value: 1n,
  })

  contract.estimateGas.overloadedNonpayable({ account: '0x' })
  contract.estimateGas.overloadedNonpayable(['foo'], { account: '0x' })
  contract.estimateGas.overloadedNonpayable2(['foo'], { account: '0x' })
  contract.estimateGas.overloadedNonpayable2(['foo', 69n], { account: '0x' })

  // read
  contract.read.pureWithoutArgs()
  contract.read.pureWithoutArgs({ blockNumber: 123n })
  contract.read.pureWithArgs(['foo', 69n])
  contract.read.pureWithArgs(['foo', 69n], { blockNumber: 123n })
  contract.read.viewWithoutArgs()
  contract.read.viewWithoutArgs({ blockNumber: 123n })
  contract.read.viewWithArgs(['foo', 69n])
  contract.read.viewWithArgs(['foo', 69n], { blockNumber: 123n })

  contract.read.overloadedView()
  contract.read.overloadedView(['foo'])
  contract.read.overloadedView2(['foo'])
  contract.read.overloadedView2(['foo', 69n])

  const read_1 = await contract.read.viewWithArgs(['foo', 69n])
  expectTypeOf(read_1).toEqualTypeOf<string>()

  // simulate
  contract.simulate.nonpayableWithoutArgs({ account: '0x' })
  contract.simulate.nonpayableWithArgs(['foo', 69n], { account: '0x' })
  contract.simulate.payableWithoutArgs({ account: '0x', value: 1n })
  contract.simulate.payableWithArgs(['foo', 69n], { account: '0x', value: 1n })

  contract.simulate.overloadedNonpayable({ account: '0x' })
  contract.simulate.overloadedNonpayable(['foo'], { account: '0x' })
  contract.simulate.overloadedNonpayable2(['foo'], { account: '0x' })
  contract.simulate.overloadedNonpayable2(['foo', 69n], { account: '0x' })

  // write
  contract.write.nonpayableWithoutArgs()
  contract.write.nonpayableWithoutArgs({ nonce: 123 })
  contract.write.nonpayableWithArgs(['foo', 69n])
  contract.write.nonpayableWithArgs(['foo', 69n], { nonce: 123 })
  contract.write.payableWithoutArgs()
  contract.write.payableWithoutArgs({ nonce: 123, value: 123n })
  contract.write.payableWithArgs(['foo', 69n])
  contract.write.payableWithArgs(['foo', 69n], {
    nonce: 123,
    value: 123n,
  })

  contract.write.overloadedNonpayable()
  contract.write.overloadedNonpayable(['foo'])
  contract.write.overloadedNonpayable2(['foo'])
  contract.write.overloadedNonpayable2(['foo', 69n])

  // createEventFilter
  contract.createEventFilter.WithoutInputs()
  contract.createEventFilter.WithoutInputs({ fromBlock: 123n })

  contract.createEventFilter.WithIndexedNamedInputs({
    x: 'foo',
    y: null,
  })
  contract.createEventFilter.WithIndexedNamedInputs({ x: 'foo' })
  contract.createEventFilter.WithIndexedNamedInputs(
    { x: 'foo' },
    { fromBlock: 123n },
  )

  contract.createEventFilter.WithIndexedUnnamedInputs([])
  contract.createEventFilter.WithIndexedUnnamedInputs(['foo'])
  contract.createEventFilter.WithIndexedUnnamedInputs(['foo'], {
    fromBlock: 123n,
  })

  contract.createEventFilter.WithUnindexedInputs({
    fromBlock: 123n,
  })

  contract.createEventFilter.WithMixedNamedInputs({})
  contract.createEventFilter.WithMixedNamedInputs({ x: 'foo ' })
  contract.createEventFilter.WithMixedNamedInputs(
    { x: 'foo' },
    { fromBlock: 123n },
  )

  contract.createEventFilter.WithMixedUnnamedInputs([])
  contract.createEventFilter.WithMixedUnnamedInputs(['foo'])
  contract.createEventFilter.WithMixedUnnamedInputs(['foo'], {
    fromBlock: 123n,
  })

  const createEventFilter_1 =
    await contract.createEventFilter.WithIndexedNamedInputs({
      x: 'foo',
      y: null,
    })
  expectTypeOf(createEventFilter_1.eventName)
    .toEqualTypeOf<'WithIndexedNamedInputs'>
  expectTypeOf(createEventFilter_1.args).toEqualTypeOf<{ x: 'foo'; y: null }>()
  const createEventFilter_2 =
    await contract.createEventFilter.WithIndexedUnnamedInputs(['foo'])
  expectTypeOf(createEventFilter_2.eventName)
    .toEqualTypeOf<'WithIndexedUnnamedInputs'>
  expectTypeOf(createEventFilter_2.args).toEqualTypeOf<['foo']>()

  // watchEvent
  // @ts-expect-error
  contract.watchEvent.WithoutInputs()
  contract.watchEvent.WithoutInputs({ onLogs, pollingInterval: 4_000 })

  contract.watchEvent.WithIndexedNamedInputs({}, { onLogs })
  contract.watchEvent.WithIndexedNamedInputs({ x: 'foo' }, { onLogs })
  contract.watchEvent.WithIndexedNamedInputs({ x: 'foo' }, { onLogs })

  contract.watchEvent.WithIndexedUnnamedInputs([], { onLogs })
  contract.watchEvent.WithIndexedUnnamedInputs(['foo'], { onLogs })
  contract.watchEvent.WithIndexedUnnamedInputs(['foo'], { onLogs })

  contract.watchEvent.WithUnindexedInputs({ onLogs })

  contract.watchEvent.WithMixedNamedInputs({}, { onLogs })
  contract.watchEvent.WithMixedNamedInputs({ x: 'foo ' }, { onLogs })
  contract.watchEvent.WithMixedNamedInputs({ x: 'foo' }, { onLogs })

  contract.watchEvent.WithMixedUnnamedInputs([], { onLogs })
  contract.watchEvent.WithMixedUnnamedInputs(['foo'], { onLogs })
  contract.watchEvent.WithMixedUnnamedInputs(['foo'], { onLogs })

  function onLogs() {}
})
