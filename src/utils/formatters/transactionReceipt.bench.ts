import { providers } from 'ethers'
import { bench, describe } from 'vitest'

import type { RpcTransactionReceipt } from '../../types/index.js'

import { formatTransactionReceipt } from './transactionReceipt.js'

const receipt: RpcTransactionReceipt = {
  blockHash:
    '0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d',
  blockNumber: '0xe6e55f',
  contractAddress: null,
  cumulativeGasUsed: '0x58b887',
  effectiveGasPrice: '0x2beb40be9',
  from: '0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e',
  gasUsed: '0x9458',
  logs: [
    {
      address: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
      blockHash:
        '0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d',
      blockNumber: '0xe6e55f',
      data: '0x0000000000000000000000000000000000000000000000000000002b3b6fb3d0',
      logIndex: '0x6c',
      removed: false,
      topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0',
        '0x000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b91',
      ],
      transactionHash:
        '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b',
      transactionIndex: '0x45',
    },
    {
      address: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
      blockHash:
        '0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d',
      blockNumber: '0xe6e55f',
      data: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffd4c4904c2f',
      logIndex: '0x6d',
      removed: false,
      topics: [
        '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
        '0x000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0',
        '0x000000000000000000000000a152f8bb749c55e9943a3a0a3111d18ee2b3f94e',
      ],
      transactionHash:
        '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b',
      transactionIndex: '0x45',
    },
  ],
  logsBloom:
    '0x08000000000000000000000000000000000000000000000000001000002000000000000000000000000000000000000000000000080000000000000000200000000000000000000000000008400000000000000000000000000000000000100000000000000000000040000008000000000004000000000000000010000000000000000000000000000000000000000000000000000000000000000000000004020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000002090000000000000000000000000000000000000000000000000000000000000',
  status: '0x1',
  to: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
  transactionHash:
    '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b',
  transactionIndex: '0x45',
  type: '0x2',
}

const formatter = new providers.Formatter()

describe.skip('Format Transaction Receipt', () => {
  bench('viem: `formatTransactionReceipt`', () => {
    formatTransactionReceipt(receipt)
  })

  bench('ethers: `formatter.receipt`', () => {
    formatter.receipt(receipt)
  })
})
