# viem

## 0.3.6

### Patch Changes

- [`ae6d388`](https://github.com/wagmi-dev/viem/commit/ae6d3883ec41dfdd3750a5f7473495d011df5802) Thanks [@jxom](https://github.com/jxom)! - Fixed unpublished type declarations.

## 0.3.5

### Patch Changes

- [`0d38807`](https://github.com/wagmi-dev/viem/commit/0d38807bcd61fae5c5d4736aed6c59277c9b4bf4) Thanks [@jxom](https://github.com/jxom)! - Fixed `batch` config in `createPublicClient`.

## 0.3.4

### Patch Changes

- [#387](https://github.com/wagmi-dev/viem/pull/387) [`230fcfd`](https://github.com/wagmi-dev/viem/commit/230fcfd97bb4937502e604630bb97695198e7b7e) Thanks [@jxom](https://github.com/jxom)! - Added support for `eth_call` batch aggregation via multicall `aggregate3`.

* [#388](https://github.com/wagmi-dev/viem/pull/388) [`bc254d8`](https://github.com/wagmi-dev/viem/commit/bc254d882bed6216daa72d5820526e6573a34e85) Thanks [@jxom](https://github.com/jxom)! - Added `size` as an argument to hex/bytes encoding/decoding utilities.

- [`03816ec`](https://github.com/wagmi-dev/viem/commit/03816ec421eb8adbcb17bd44c5dc344407acba2d) Thanks [@jxom](https://github.com/jxom)! - Disabled `fallback` transport ranking by default.

## 0.3.3

### Patch Changes

- [#383](https://github.com/wagmi-dev/viem/pull/383) [`7e9731c`](https://github.com/wagmi-dev/viem/commit/7e9731cf315ddcd10f35c81c63a15af6aa78350d) Thanks [@Raiden1411](https://github.com/Raiden1411)! - Fixed an issue where `serializeTransaction` was incorrectly encoding zero-ish properties.

## 0.3.2

### Patch Changes

- [#375](https://github.com/wagmi-dev/viem/pull/375) [`f9bedc9`](https://github.com/wagmi-dev/viem/commit/f9bedc94ecd41fdcb2f0fed1d90162567c2a31ea) Thanks [@fubhy](https://github.com/fubhy)! - Support edge runtime

## 0.3.1

### Patch Changes

- [`6856443`](https://github.com/wagmi-dev/viem/commit/6856443fb75421639c9622343d5958791028874c) Thanks [@jxom](https://github.com/jxom)! - Added `recoverPublicKey`.

* [#363](https://github.com/wagmi-dev/viem/pull/363) [`ee1cb7f`](https://github.com/wagmi-dev/viem/commit/ee1cb7ff546236041b1ca115bb2a252520e8ef7f) Thanks [@tmm](https://github.com/tmm)! - Added inference to `getLogs` `event` type.

- [#365](https://github.com/wagmi-dev/viem/pull/365) [`f4dcc33`](https://github.com/wagmi-dev/viem/commit/f4dcc33739a339c286f852a377f71fbf2fb7ab97) Thanks [@fubhy](https://github.com/fubhy)! - Fixed `getAbiItem` to not use a generic type variable for the return type

## 0.3.0

### Minor Changes

- [#355](https://github.com/wagmi-dev/viem/pull/355) [`b1acfc9`](https://github.com/wagmi-dev/viem/commit/b1acfc9198bfbed8c3de6e769c5ff06d7124881c) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Renamed `RequestError` to `RpcError`.
  **Breaking:** Removed `RpcRequestError` – use `RpcError` instead.
  **Breaking:** Renamed `RpcError` to `RpcRequestError`.

### Patch Changes

- [#355](https://github.com/wagmi-dev/viem/pull/355) [`b1acfc9`](https://github.com/wagmi-dev/viem/commit/b1acfc9198bfbed8c3de6e769c5ff06d7124881c) Thanks [@jxom](https://github.com/jxom)! - Added `ProviderRpcError` subclass.

  Added EIP-1193 `UnauthorizedProviderError`, `UnsupportedProviderMethodError`, `ProviderDisconnectedError`, and `ChainDisconnectedError`.

* [#349](https://github.com/wagmi-dev/viem/pull/349) [`b275811`](https://github.com/wagmi-dev/viem/commit/b2758116623567a07e9c2cae7e2471e3c6bf2ecf) Thanks [@jxom](https://github.com/jxom)! - Fixed an issue where Filter querying (`eth_getFilterChanges`, etc) was not being scoped to the Transport that created the Filter.

## 0.2.14

### Patch Changes

- [#344](https://github.com/wagmi-dev/viem/pull/344) [`bb9c2a4`](https://github.com/wagmi-dev/viem/commit/bb9c2a4b769655f230b8af22efb871393e78a80d) Thanks [@jxom](https://github.com/jxom)! - Added `EIP1193Provider` type.

## 0.2.13

### Patch Changes

- [#331](https://github.com/wagmi-dev/viem/pull/331) [`cd7b642`](https://github.com/wagmi-dev/viem/commit/cd7b64242643247c3c04896dacdd95b2a335ba52) Thanks [@jxom](https://github.com/jxom)! - Migrated to TypeScript 5.
  Migrated build process from `tsup` to `tsc`.

* [#343](https://github.com/wagmi-dev/viem/pull/343) [`579171d`](https://github.com/wagmi-dev/viem/commit/579171dbc691f9c352688455f21b6c4187dbf422) Thanks [@fubhy](https://github.com/fubhy)! - Fixed conditional types for poll options on `watchBlocks` & `watchPendingTransactions`.

## 0.2.12

### Patch Changes

- [#328](https://github.com/wagmi-dev/viem/pull/328) [`ee87fe7`](https://github.com/wagmi-dev/viem/commit/ee87fe73884297db1c3957453efd7c326924c269) Thanks [@jxom](https://github.com/jxom)! - Tweaked error inheritence for `UserRejectedRequestError` & `SwitchChainError` to be more friendly with custom errors.

## 0.2.11

### Patch Changes

- [#326](https://github.com/wagmi-dev/viem/pull/326) [`c83616a`](https://github.com/wagmi-dev/viem/commit/c83616ad33aa06054342a3bf72bcb51c09ee0ada) Thanks [@jxom](https://github.com/jxom)! - Fixed an issue where filtered logs that do not conform to the provided ABI would cause `getLogs`, `getFilterLogs` or `getFilterChanges` to throw – these logs are now skipped. See [#323](https://github.com/wagmi-dev/viem/issues/323#issuecomment-1499654052) for more info.

## 0.2.10

### Patch Changes

- [#322](https://github.com/wagmi-dev/viem/pull/322) [`ea019d7`](https://github.com/wagmi-dev/viem/commit/ea019d75c5243d8ae2b8ca1686b34026b170d903) Thanks [@tmm](https://github.com/tmm)! - Fixed properties passed to ethers adapter `signTransaction`

## 0.2.9

### Patch Changes

- [#317](https://github.com/wagmi-dev/viem/pull/317) [`2720ba5`](https://github.com/wagmi-dev/viem/commit/2720ba566d02fdb2c6ddc8d016ec252606a9cb95) Thanks [@jxom](https://github.com/jxom)! - Fixed `transports` property type on `FallbackTransport`.

## 0.2.8

### Patch Changes

- [#313](https://github.com/wagmi-dev/viem/pull/313) [`eb2280c`](https://github.com/wagmi-dev/viem/commit/eb2280cbc65b3e509b4b3871fe75b236101da442) Thanks [@jxom](https://github.com/jxom)! - Migrated from `idna-uts46-hx` to `@adraffy/ens-normalize` for `normalize`.

## 0.2.7

### Patch Changes

- [#310](https://github.com/wagmi-dev/viem/pull/310) [`6dfc225`](https://github.com/wagmi-dev/viem/commit/6dfc22537b9dd5740911b8677bba01cc477b9b23) Thanks [@jxom](https://github.com/jxom)! - Made `GetValue` return `{ value?: never }` instead of `unknown` for contract functions that are not payable.

## 0.2.6

### Patch Changes

- [#295](https://github.com/wagmi-dev/viem/pull/295) [`9a15a61`](https://github.com/wagmi-dev/viem/commit/9a15a612dd4a416f932c99519416665c0ffac214) Thanks [@fubhy](https://github.com/fubhy)! - Return discrimated union type from `decodeFunctionData`

* [#304](https://github.com/wagmi-dev/viem/pull/304) [`8e1b712`](https://github.com/wagmi-dev/viem/commit/8e1b712efc256c16a98408d10557d5f55d8927d7) Thanks [@fubhy](https://github.com/fubhy)! - Fixed `getTransactionType` to honor `undefined` EIP-1559, EIP-2930 or Legacy attributes.

- [#302](https://github.com/wagmi-dev/viem/pull/302) [`c00a459`](https://github.com/wagmi-dev/viem/commit/c00a459490ff283812e6847547149a8104a5c4d0) Thanks [@fubhy](https://github.com/fubhy)! - Fixed forwarding of options to transport for wallet client

## 0.2.5

### Patch Changes

- [#297](https://github.com/wagmi-dev/viem/pull/297) [`96d072c`](https://github.com/wagmi-dev/viem/commit/96d072cac1ae09f85afcbbca63c99f10a80f1722) Thanks [@fubhy](https://github.com/fubhy)! - Fixed wordlists exports.

## 0.2.4

### Patch Changes

- [#293](https://github.com/wagmi-dev/viem/pull/293) [`859352c`](https://github.com/wagmi-dev/viem/commit/859352c38333ec22924b24242db8f583fc73d9fb) Thanks [@TateB](https://github.com/TateB)! - Fixed ENS address resolution for when resolver returns with a null address, or resolvers that do not support `addr`. `getEnsAddress` returns `null` for these cases.

## 0.2.3

### Patch Changes

- [#290](https://github.com/wagmi-dev/viem/pull/290) [`ef2bbaf`](https://github.com/wagmi-dev/viem/commit/ef2bbafa2b372bfa8fa1b29ffabea75ca3ea1122) Thanks [@holic](https://github.com/holic)! - Fixed ENS address resolution for "0x"-prefixed names.

## 0.2.2

### Patch Changes

- [#289](https://github.com/wagmi-dev/viem/pull/289) [`8c51f93`](https://github.com/wagmi-dev/viem/commit/8c51f93cfbe304c88b018c679c4413e8874692e7) Thanks [@jxom](https://github.com/jxom)! - Pinned dependencies.

* [#289](https://github.com/wagmi-dev/viem/pull/289) [`8c51f93`](https://github.com/wagmi-dev/viem/commit/8c51f93cfbe304c88b018c679c4413e8874692e7) Thanks [@jxom](https://github.com/jxom)! - Made `@scure/bip39/wordlists/*` & `idna-uts46-hx` exports ESM friendly.

## 0.2.1

### Patch Changes

- [#285](https://github.com/wagmi-dev/viem/pull/285) [`ab9fd12`](https://github.com/wagmi-dev/viem/commit/ab9fd121fbe271ba9bee43aea2d7bba122dc4f03) Thanks [@tmm](https://github.com/tmm)! - Exported `hdKeyToAccount` and `mnemonicToAccount`.

## 0.2.0 – [Migration Guide](https://viem.sh/docs/migration-guide.html)

### Minor Changes

- [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Removed the `getAccount` function.

  **For JSON-RPC Accounts, use the address itself.**

  ```diff
  import { createWalletClient, custom } from 'viem'
  import { mainnet } from 'viem/chains'

  const address = '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2'

  const client = createWalletClient({
  - account: getAccount(address),
  + account: address,
    chain: mainnet,
    transport: custom(window.ethereum)
  })
  ```

  **For Ethers Wallet Adapter, use `ethersWalletToAccount`.**

  If you were using the Ethers Wallet adapter, you can use the `ethersWalletToAccount` function.

  > Note: viem 0.2.0 now has a [Private Key](/docs/accounts/privateKey.html) & [Mnemonic Account](/docs/accounts/mnemonic.html) implementation. You probably do not need this adapter anymore. This adapter may be removed in a future version.

  ```diff
  import { createWalletClient, custom } from 'viem'
  import { mainnet } from 'viem/chains'
  - import { getAccount } from 'viem/ethers'
  + import { ethersWalletToAccount } from 'viem/ethers'
  import { Wallet } from 'ethers'

  - const account = getAccount(new Wallet('0x...'))
  + const account = ethersWalletToAccount(new Wallet('0x...'))

  const client = createWalletClient({
    account,
    chain: mainnet,
    transport: custom(window.ethereum)
  })
  ```

  **For Local Accounts, use `toAccount`.**

  ```diff
  - import { createWalletClient, http, getAccount } from 'viem'
  + import { createWalletClient, http } from 'viem'
  + import { toAccount } from 'viem/accounts'
  import { mainnet } from 'viem/chains'
  import { getAddress, signMessage, signTransaction } from './sign-utils'

  const privateKey = '0x...'
  - const account = getAccount({
  + const account = toAccount({
    address: getAddress(privateKey),
    signMessage(message) {
      return signMessage(message, privateKey)
    },
    signTransaction(transaction) {
      return signTransaction(transaction, privateKey)
    },
    signTypedData(typedData) {
      return signTypedData(typedData, privateKey)
    }
  })

  const client = createWalletClient({
    account,
    chain: mainnet,
    transport: http()
  })
  ```

* [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Removed `assertChain` argument on `sendTransaction`, `writeContract` & `deployContract`. If you wish to bypass the chain check (not recommended unless for testing purposes), you can pass `chain: null`.

  ```diff
  await walletClient.sendTransaction({
  - assertChain: false,
  + chain: null,
    ...
  })
  ```

- [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** A chain is now required for the `sendTransaction`, `writeContract`, `deployContract` Actions.

  You can hoist the Chain on the Client:

  ```diff
  import { createWalletClient, custom, getAccount } from 'viem'
  import { mainnet } from 'viem/chains'

  export const walletClient = createWalletClient({
  + chain: mainnet,
    transport: custom(window.ethereum)
  })

  const account = getAccount('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')

  const hash = await walletClient.sendTransaction({
    account,
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: 1000000000000000000n
  })
  ```

  Alternatively, you can pass the Chain directly to the Action:

  ```diff
  import { createWalletClient, custom, getAccount } from 'viem'
  import { mainnet } from 'viem/chains'

  export const walletClient = createWalletClient({
  - chain: mainnet,
    transport: custom(window.ethereum)
  })

  const account = getAccount('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')

  const hash = await walletClient.sendTransaction({
    account,
  + chain: mainnet,
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: 1000000000000000000n
  })
  ```

* [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Updated utility type names to reflect their purposes:

  - `ExtractErrorNameFromAbi` is now `InferErrorName`
  - `ExtractEventNameFromAbi` is now `InferEventName`
  - `ExtractFunctionNameFromAbi` is now `InferFunctionName`
  - `ExtractItemNameFromAbi` is now `InferItemName`
  - `ExtractConstructorArgsFromAbi` is now `GetConstructorArgs`
  - `ExtractErrorArgsFromAbi` is now `GetErrorArgs`
  - `ExtractEventArgsFromAbi` is now `GetEventArgs`
  - `ExtractEventArgsFromTopics` is now `GetEventArgsFromTopics`
  - `ExtractArgsFromAbi` is now `GetFunctionArgs`

- [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** The following functions are now `async` functions instead of synchronous functions:

  - `recoverAddress`
  - `recoverMessageAddress`
  - `verifyMessage`

  ```diff
  import { recoverMessageAddress } from 'viem'

  - recoverMessageAddress({ message: 'hello world', signature: '0x...' })
  + await recoverMessageAddress({ message: 'hello world', signature: '0x...' })
  ```

### Patch Changes

- [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - Added `getEnsText` & `getEnsAvatar`

* [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - Added Local Account implementations:

  - `privateKeyToAccount`
  - `mnemonicToAccount`
  - `hdKeyToAccount`

  If you were previously relying on the `viem/ethers` wallet adapter, you no longer need to use this.

  ```diff
  - import { Wallet } from 'ethers'
  - import { getAccount } from 'viem/ethers'
  + import { privateKeyToAccount } from 'viem/accounts'

  const privateKey = '0x...'
  - const account = getAccount(new Wallet(privateKey))
  + const account = privateKeyToAccount(privateKey)

  const client = createWalletClient({
    account,
    chain: mainnet,
    transport: http()
  })
  ```

- [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - Added WebSocket `eth_subscribe` support `watchBlocks`, `watchBlockNumber`, and `watchPendingTransactions`.

* [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - Updated Client types.

- [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - Added `verifyTypedData`, `hashTypedData`, `recoverTypedDataMessage`

* [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - Added the ability to hoist an Account to the Wallet Client.

  ```diff
  import { createWalletClient, http } from 'viem'
  import { mainnnet } from 'viem/chains'

  const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })

  const client = createWalletClient({
  + account,
    chain: mainnet,
    transport: http()
  })

  const hash = await client.sendTransaction({
  - account,
    to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    value: parseEther('0.001')
  })
  ```

- [#229](https://github.com/wagmi-dev/viem/pull/229) [`098f342`](https://github.com/wagmi-dev/viem/commit/098f3423ee84f9deb09c2c7d30e950a046c07ea9) Thanks [@jxom](https://github.com/jxom)! - Added getEnsResolver

## 0.1.26

### Patch Changes

- [`93e402d`](https://github.com/wagmi-dev/viem/commit/93e402d6fddabcb6966fd8f81d7176d71241e193) Thanks [@jxom](https://github.com/jxom)! - Fixed a `decodeAbiParameters` case where static arrays with a dynamic child would consume the size of the child instead of 32 bytes.

## 0.1.25

### Patch Changes

- [#263](https://github.com/wagmi-dev/viem/pull/263) [`53fda1a`](https://github.com/wagmi-dev/viem/commit/53fda1a5366ff1122b951d8148c1a9f74f280578) Thanks [@fubhy](https://github.com/fubhy)! - Fixed issue where ABIs with constructors would throw for `decodeFunctionData`.

## 0.1.24

### Patch Changes

- [#237](https://github.com/wagmi-dev/viem/pull/237) [`a92c4fa`](https://github.com/wagmi-dev/viem/commit/a92c4fa31eb4a71cb68edf6d50a58cf653419f86) Thanks [@jxom](https://github.com/jxom)! - Added automatic ranking to `fallback` Transport.

## 0.1.23

### Patch Changes

- [#251](https://github.com/wagmi-dev/viem/pull/251) [`153e97e`](https://github.com/wagmi-dev/viem/commit/153e97ed0461c34fd75fa7cad3820e9960f6810a) Thanks [@tmm](https://github.com/tmm)! - Fixed `signTypedData` inference for `primaryType` field.

## 0.1.22

### Patch Changes

- [`07000b6`](https://github.com/wagmi-dev/viem/commit/07000b650b6cce41c99a4ccf609f5fccce818244) Thanks [@jxom](https://github.com/jxom)! - Removed unnecessary trimming of decoded RLP hex value

## 0.1.21

### Patch Changes

- [#223](https://github.com/wagmi-dev/viem/pull/223) [`2e9c000`](https://github.com/wagmi-dev/viem/commit/2e9c0008c76939e54902569f8f8581a943914e4f) Thanks [@jxom](https://github.com/jxom)! - Added an assertion in `sendTransaction` & `writeContract` to check that the client chain matches the wallet's current chain.

## 0.1.20

### Patch Changes

- [#220](https://github.com/wagmi-dev/viem/pull/220) [`9a80fca`](https://github.com/wagmi-dev/viem/commit/9a80fca116417f77d4a305a59ec0c3ecf3e0fdfa) Thanks [@jxom](https://github.com/jxom)! - Fixed an issue where `watchEvent` would not emit events on missed blocks for the `getLogs` fallback.

## 0.1.19

### Patch Changes

- [`74f8e1d`](https://github.com/wagmi-dev/viem/commit/74f8e1dfe1b86eba9453ede0b20babf8e150423a) Thanks [@jxom](https://github.com/jxom)! - Added missing `recoverMessageAddress` and `verifyMessage` exports.

## 0.1.18

### Patch Changes

- [`9c45397`](https://github.com/wagmi-dev/viem/commit/9c4539756d138f196b368fd1ac8e1a926d9bace0) Thanks [@jxom](https://github.com/jxom)! - Fixed `signTypedData` support for Ethers.js v5 wallets

## 0.1.17

### Patch Changes

- [#213](https://github.com/wagmi-dev/viem/pull/213) [`46f823a`](https://github.com/wagmi-dev/viem/commit/46f823afd017b1421c66162d832080f8dc7711e1) Thanks [@jxom](https://github.com/jxom)! - Fixed return type for `allowFailure: false` on `multicall`

* [`1339b20`](https://github.com/wagmi-dev/viem/commit/1339b20f735cb18b397aa1910cdb288609612f14) Thanks [@jxom](https://github.com/jxom)! - Exported `Extract*FromAbi` types

- [`c3d932a`](https://github.com/wagmi-dev/viem/commit/c3d932ad69a0c54fb204d7878a1a96916d1193df) Thanks [@jxom](https://github.com/jxom)! - Fixed `signTypedData` support for Ethers.js v5 Wallets

## 0.1.16

### Patch Changes

- [#207](https://github.com/wagmi-dev/viem/pull/207) [`8e5768f`](https://github.com/wagmi-dev/viem/commit/8e5768ffa1d813810b99f5ed06a00bfe830b2a35) Thanks [@jxom](https://github.com/jxom)! - Added assertion in `watchBlocks` and `watchBlockNumber` to check that the next block number is higher than the previously seen block number.

* [#209](https://github.com/wagmi-dev/viem/pull/209) [`ae3e0b6`](https://github.com/wagmi-dev/viem/commit/ae3e0b62a21671bd749e20ec5d65d80fa7475adc) Thanks [@jxom](https://github.com/jxom)! - Added `verifyMessage`, `recoverAddress`, `recoverMessageAddress`, and `hashMessage`.

## 0.1.15

### Patch Changes

- [#205](https://github.com/wagmi-dev/viem/pull/205) [`36fa97a`](https://github.com/wagmi-dev/viem/commit/36fa97a595670825f1dee008ebf44abbc1402f2e) Thanks [@jxom](https://github.com/jxom)! - Added an assertion to check for existence of an event signature on `topics` for `decodeEventLog`

## 0.1.14

### Patch Changes

- [#198](https://github.com/wagmi-dev/viem/pull/198) [`e805e7e`](https://github.com/wagmi-dev/viem/commit/e805e7ebaa7c15ea21a49ac0759bf4ebe5284f72) Thanks [@wighawag](https://github.com/wighawag)! - Added an assertion in `decodeEventLog` to check for a mismatch between topics + indexed event parameters.

## 0.1.13

### Patch Changes

- [`56f2e03`](https://github.com/wagmi-dev/viem/commit/56f2e03837d64a9156766f0ef785ac50ba27380f) Thanks [@jxom](https://github.com/jxom)! - Added export for `concat`.

## 0.1.12

### Patch Changes

- [`c0e3617`](https://github.com/wagmi-dev/viem/commit/c0e3617b639ba84c03011430d69d72173da00466) Thanks [@jxom](https://github.com/jxom)! - Fixed `viem/ethers` entrypoint.

## 0.1.11

### Patch Changes

- [#88](https://github.com/wagmi-dev/viem/pull/88) [`5456490`](https://github.com/wagmi-dev/viem/commit/545649093422fb14a39418a7199766d033c9e175) Thanks [@jxom](https://github.com/jxom)! - Added `signTypedData`.

## 0.1.10

### Patch Changes

- [#178](https://github.com/wagmi-dev/viem/pull/178) [`eda1827`](https://github.com/wagmi-dev/viem/commit/eda182754ed2727bc652225e327760ab0a14a962) Thanks [@0xOlias](https://github.com/0xOlias)! - Fixed type of `topics` field on the `Log` type.

* [#181](https://github.com/wagmi-dev/viem/pull/181) [`8213be3`](https://github.com/wagmi-dev/viem/commit/8213be3676283ec80d0d5cbcee4864fe4d9c6b6e) Thanks [@tmm](https://github.com/tmm)! - Bumped abitype version.

## 0.1.9

### Patch Changes

- [#170](https://github.com/wagmi-dev/viem/pull/170) [`35a7508`](https://github.com/wagmi-dev/viem/commit/35a750839ae5ac41427e84922315ce3e360ee58a) Thanks [@jxom](https://github.com/jxom)! - Added inference for multicall address from client chain.

## 0.1.8

### Patch Changes

- [`36c908c`](https://github.com/wagmi-dev/viem/commit/36c908c65dcbca1a68841dfa8eb89963561431b1) Thanks [@jxom](https://github.com/jxom)! - Fixed an issue where empty strings were not being decoded properly in `decodeAbiParameters`.

## 0.1.7

### Patch Changes

- [#159](https://github.com/wagmi-dev/viem/pull/159) [`574ae22`](https://github.com/wagmi-dev/viem/commit/574ae2244c755519bda02b46d8767a365e1f4217) Thanks [@jxom](https://github.com/jxom)! - Fixed issue where decoding error logs would break if constructor was in ABI.

## 0.1.6

### Patch Changes

- [#153](https://github.com/wagmi-dev/viem/pull/153) [`bbb998a`](https://github.com/wagmi-dev/viem/commit/bbb998a6a1c2ce97a76e6275e1f07b6e2767b248) Thanks [@jxom](https://github.com/jxom)! - Formatted `undefined` values from RPC as `null` to conform to EIP-1474.

## 0.1.5

### Patch Changes

- [#141](https://github.com/wagmi-dev/viem/pull/141) [`450b612`](https://github.com/wagmi-dev/viem/commit/450b612289b832559ce11a9e2eba7dda68a7a981) Thanks [@unholypanda](https://github.com/unholypanda)! - Fixed `createPublicClient` to include `getTransactionCount`

## 0.1.4

### Patch Changes

- [#139](https://github.com/wagmi-dev/viem/pull/139) [`304a436`](https://github.com/wagmi-dev/viem/commit/304a4365dba9aa7be191ae4436b952eea9cfe79e) Thanks [@jxom](https://github.com/jxom)! - Added the following chains:

  - `baseGoerli`
  - `boba`
  - `filecoinCalibration`
  - `flare`
  - `flareTestnet`
  - `harmonyOne`
  - `moonbaseAlpha`
  - `moonbeam`
  - `moonriver`
  - `okc`
  - `polygonZkEvmTestnet`
  - `shardeumSphinx`
  - `songbird`
  - `songbirdTestnet`
  - `telos`
  - `telosTestnet`
  - `zhejiang`

## 0.1.3

### Patch Changes

- [#136](https://github.com/wagmi-dev/viem/pull/136) [`dcca090`](https://github.com/wagmi-dev/viem/commit/dcca0900556d45a5795af4f60ef070a54a6f0306) Thanks [@jxom](https://github.com/jxom)! - Fixed ABI encoding for strings larger than 32 bytes.

* [#136](https://github.com/wagmi-dev/viem/pull/136) [`dcca090`](https://github.com/wagmi-dev/viem/commit/dcca0900556d45a5795af4f60ef070a54a6f0306) Thanks [@jxom](https://github.com/jxom)! - Fixed emoji string encoding.

## 0.1.2

### Patch Changes

- [`637d252`](https://github.com/wagmi-dev/viem/commit/637d2523e3e259deb9538a0089c0c80bb37abf22) Thanks [@jxom](https://github.com/jxom)! - Bumped abitype to 0.6.7

## 0.1.1

### Patch Changes

- [#128](https://github.com/wagmi-dev/viem/pull/128) [`ef51936`](https://github.com/wagmi-dev/viem/commit/ef519364c28a2ec6571b5e8d13aced0c9123dc46) Thanks [@tmm](https://github.com/tmm)! - Fixed internal type compilation error.

## 0.1.0

### Minor Changes

- [`fec4460`](https://github.com/wagmi-dev/viem/commit/fec4460f63ac2c367722554cf910f1ee78b2795d) Thanks [@jxom](https://github.com/jxom)! - Initial release.

## 0.0.1-alpha.39

### Patch Changes

- [`68c3816`](https://github.com/wagmi-dev/viem/commit/68c3816c8c492aa0943b63438a13109e9ac682df) Thanks [@jxom](https://github.com/jxom)! - Added `encodePacked`.

* [`68c3816`](https://github.com/wagmi-dev/viem/commit/68c3816c8c492aa0943b63438a13109e9ac682df) Thanks [@jxom](https://github.com/jxom)! - Made `keccak256` accept a hex value (as well as byte array).

## 0.0.1-alpha.38

### Patch Changes

- [`59a60cb`](https://github.com/wagmi-dev/viem/commit/59a60cb8cc7d0109c08fa5906a24c6eb8e48b183) Thanks [@jxom](https://github.com/jxom)! - Fixed decoding zero data bytes

## 0.0.1-alpha.37

### Patch Changes

- [`e07f212`](https://github.com/wagmi-dev/viem/commit/e07f212af5ef94b938939f0205056c29747bb919) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Renamed `formatUnit` and `parseUnit` to `formatUnits` and `parseUnits`.

## 0.0.1-alpha.36

### Patch Changes

- [#100](https://github.com/wagmi-dev/viem/pull/100) [`6bb8ce4`](https://github.com/wagmi-dev/viem/commit/6bb8ce4eafff68989281f19fb315c0ea2f22b01a) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Renamed `requestAccounts` Wallet Action to `requestAddresses`

  **Breaking:** Renamed `getAccounts` Wallet Action to `getAddresses`

* [#100](https://github.com/wagmi-dev/viem/pull/100) [`6bb8ce4`](https://github.com/wagmi-dev/viem/commit/6bb8ce4eafff68989281f19fb315c0ea2f22b01a) Thanks [@jxom](https://github.com/jxom)! - Added support for Externally Owned Accounts.

- [#100](https://github.com/wagmi-dev/viem/pull/100) [`6bb8ce4`](https://github.com/wagmi-dev/viem/commit/6bb8ce4eafff68989281f19fb315c0ea2f22b01a) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** The `from` argument has been removed from Actions in favour of `account` to distinguish between [Account types](https://viem.sh/docs/clients/wallet):

  ```diff
  + import { getAccount } from 'viem'

  const [address] = await walletClient.requestAddresses()
  + const account = getAccount(address)

  const hash = await walletClient.sendTransaction({
  - from: address,
  + account,
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: 1000000000000000000n
  })
  ```

  Affected actions:

  - `call`
  - `estimateGas`
  - `sendTransaction`
  - `signMessage`
  - `estimateContractGas`
  - `multicall`
  - `readContract`
  - `simulateContract`
  - `writeContract`

## 0.0.1-alpha.35

### Patch Changes

- [`057e01e`](https://github.com/wagmi-dev/viem/commit/057e01e9fff7346304e787d93053d84a09278335) Thanks [@jxom](https://github.com/jxom)! - - `testClient.getTxPoolContent` → `testClient.getTxpoolContent`
  - `testClient.getTxPoolStatus` → `testClient.getTxpoolStatus`

* [#85](https://github.com/wagmi-dev/viem/pull/85) [`2350d1a`](https://github.com/wagmi-dev/viem/commit/2350d1af1ff67d725ff3563538b9886a405ab8bd) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Renamed `encodeAbi` & `decodeAbi` to `encodeAbiParameters` & `decodeAbiParameters`, and modified API from named arguments to inplace arguments:

  ```diff
  import {
  - encodeAbi,
  - decodeAbi,
  + encodeAbiParameters,
  + decodeAbiParameters,
  } from 'viem'

  -const result = encodeAbi({ params, values })
  +const result = encodeAbiParameters(params, values)

  -const result = decodeAbi({ params, data })
  +const result = decodeAbiParameters(params, data)
  ```

## 0.0.1-alpha.34

### Patch Changes

- [`e1634b5`](https://github.com/wagmi-dev/viem/commit/e1634b5d110b1a39032eab9813f93244b04123ad) Thanks [@jxom](https://github.com/jxom)! - Fixed ABI encoding dynamic tuple child derivation

## 0.0.1-alpha.33

### Patch Changes

- [`1971e6a`](https://github.com/wagmi-dev/viem/commit/1971e6ad74df802bdbd988ddc5e6fc06fad66091) Thanks [@jxom](https://github.com/jxom)! - Added assertion to check if addresses are valid for `sendTransaction`, `estimateGas` & `call`.

## 0.0.1-alpha.32

### Patch Changes

- [`7243744`](https://github.com/wagmi-dev/viem/commit/7243744ecd230532b8f11d1766318a75760229e5) Thanks [@jxom](https://github.com/jxom)! - Added support for `4001` & `4902` RPC error codes.

## 0.0.1-alpha.31

### Patch Changes

- [#89](https://github.com/wagmi-dev/viem/pull/89) [`3e45853`](https://github.com/wagmi-dev/viem/commit/3e45853a2252e6a5496acae65c3cebecbdb4260f) Thanks [@jxom](https://github.com/jxom)! - Added `fetchOptions` to the `http` transport.

* [#91](https://github.com/wagmi-dev/viem/pull/91) [`0ac32c2`](https://github.com/wagmi-dev/viem/commit/0ac32c2852dc470aaba560623a2e169927a546d5) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Renamed `getFunctionSignature` and `getEventSignature` to `getFunctionSelector` and `getEventSelector`.

## 0.0.1-alpha.30

### Patch Changes

- [#81](https://github.com/wagmi-dev/viem/pull/81) [`eb572b0`](https://github.com/wagmi-dev/viem/commit/eb572b0a431606f8c31abb011cef08ad36d0836c) Thanks [@jxom](https://github.com/jxom)! - Improved transaction & contract error messaging & coalesce error messages from nodes.

## 0.0.1-alpha.29

### Patch Changes

- [`6bdee9c`](https://github.com/wagmi-dev/viem/commit/6bdee9c8dde1c06ebde769c50c1002b2cca0a0f9) Thanks [@jxom](https://github.com/jxom)! - Fixed issue where fallback transport was not falling back on timeouts

## 0.0.1-alpha.28

### Patch Changes

- [`8ef068b`](https://github.com/wagmi-dev/viem/commit/8ef068b024d90b1a62e34b6556268d6a38514eb3) Thanks [@jxom](https://github.com/jxom)! - Added `502`, `503` and `504` error codes as "non-deterministic" errors for `fallback` transport & retries.

* [#79](https://github.com/wagmi-dev/viem/pull/79) [`db9caa9`](https://github.com/wagmi-dev/viem/commit/db9caa98fb7cf8592940c1c2e4d41b678b70240c) Thanks [@jxom](https://github.com/jxom)! - Added `timeout` as a config option to the `http` and `webSocket` Transports.

- [#77](https://github.com/wagmi-dev/viem/pull/77) [`d6a29f5`](https://github.com/wagmi-dev/viem/commit/d6a29f5223324660cd98c2a6aaf345c207b2cd97) Thanks [@jxom](https://github.com/jxom)! - Decorated Clients with their respective Actions.

  Example:

  ```diff
  import { createPublicClient, http } from 'viem'
  import { mainnet } from 'viem/chains'
  -import { getBlockNumber } from 'viem/public'

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  })

  - const blockNumber = await getBlockNumber(client)
  + const blockNumber = await client.getBlockNumber()
  ```

## 0.0.1-alpha.26

### Patch Changes

**Breaking**: Renamed encoding utils.

- `encodeBytes`/`decodeBytes` → `toBytes`/`fromBytes`
- `encodeHex`/`decodeHex` → `toHex`/`fromHex`
- `encodeRlp`/`decodeRlp` → `toRlp`/`fromRlp`

## 0.0.1-alpha.26

### Patch Changes

- [`7d9a241`](https://github.com/wagmi-dev/viem/commit/7d9a2413805b142611d29d7e5faddd44ae3c047c) Thanks [@jxom](https://github.com/jxom)! - Added `estimateContractGas`.

* [`7d9a241`](https://github.com/wagmi-dev/viem/commit/7d9a2413805b142611d29d7e5faddd44ae3c047c) Thanks [@jxom](https://github.com/jxom)! - Added `retryCount` and `retryDelay` config to Transports.

## 0.0.1-alpha.25

### Patch Changes

- [`6c902f8`](https://github.com/wagmi-dev/viem/commit/6c902f86e2067dcd366434722429fe873c8d6089) Thanks [@jxom](https://github.com/jxom)! - Added `decodeEventLog`.

* [#68](https://github.com/wagmi-dev/viem/pull/68) [`1be77b3`](https://github.com/wagmi-dev/viem/commit/1be77b3e7f454ae6085daefe1f24ca9f757334f8) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Removed all public/wallet/test actions & utils from the `viem` entrypoint to their respective entrypoints:

  - `viem` = Clients & Transport exports
  - `viem/chains` = Chains exports
  - `viem/contract` = Contract Actions & Utils exports
  - `viem/ens` = ENS Actions & Utils exports
  - `viem/public` = Public Actions exports
  - `viem/test` = Test Actions exports
  - `viem/utils` = Utils exports
  - `viem/wallet` = Wallet Actions exports

- [#66](https://github.com/wagmi-dev/viem/pull/66) [`f19fc32`](https://github.com/wagmi-dev/viem/commit/f19fc329bd7bad7639824fcf65387be542facc83) Thanks [@tmm](https://github.com/tmm)! - Added ENS actions `getEnsAddress` and `getEnsName`.

## 0.0.1-alpha.24

### Patch Changes

- [#63](https://github.com/wagmi-dev/viem/pull/63) [`7473582`](https://github.com/wagmi-dev/viem/commit/7473582aff91c6c717ee112743c45dc4cf5dd543) Thanks [@tmm](https://github.com/tmm)! - Exported missing `watchContractEvent` and `watchEvent` actions.

## 0.0.1-alpha.23

### Patch Changes

- [#61](https://github.com/wagmi-dev/viem/pull/61) [`e4b2dbb`](https://github.com/wagmi-dev/viem/commit/e4b2dbb67e5b9f7f8d703191207931042127ebce) Thanks [@tmm](https://github.com/tmm)! - Exported multicall action

## 0.0.1-alpha.22

### Patch Changes

- [#57](https://github.com/wagmi-dev/viem/pull/57) [`40c76e3`](https://github.com/wagmi-dev/viem/commit/40c76e3ac4478ee1e5c739d8162eb2006e3679e0) Thanks [@jxom](https://github.com/jxom)! - support `Panic` & custom contract errors

* [#56](https://github.com/wagmi-dev/viem/pull/56) [`3e90197`](https://github.com/wagmi-dev/viem/commit/3e90197bbac1ea571876d316a8667f4a00e84e9f) Thanks [@jxom](https://github.com/jxom)! - - **Breaking**: Renamed `humanMessage` to `shortMessage` in `BaseError`.
  - Added `multicall`.
  - Support overloaded contract functions.

## 0.0.1-alpha.21

### Patch Changes

- [`5a6bdf8`](https://github.com/wagmi-dev/viem/commit/5a6bdf8ea034b7edf6b2207b525764cee43bdb4b) Thanks [@jxom](https://github.com/jxom)! - Fixed an issue where `encodeAbi` couldn't encode dynamic bytes larger than 32 bytes"

## 0.0.1-alpha.20

### Patch Changes

- [`ebf1dc8`](https://github.com/wagmi-dev/viem/commit/ebf1dc8e4785fd8115687995916882caa94f7ecd) Thanks [@jxom](https://github.com/jxom)! - Added `watchEvent`

* [`ebf1dc8`](https://github.com/wagmi-dev/viem/commit/ebf1dc8e4785fd8115687995916882caa94f7ecd) Thanks [@jxom](https://github.com/jxom)! - Added `watchContractEvent`

- [`ae90357`](https://github.com/wagmi-dev/viem/commit/ae9035735590b09e375dd4f773dd8b5e6c953fab) Thanks [@jxom](https://github.com/jxom)! - Made `watchBlocks` more type safe with the `includeTransactions` arg.

## 0.0.1-alpha.19

### Patch Changes

- [`2028985`](https://github.com/wagmi-dev/viem/commit/202898521d4c211d73f8194c642c62a9baa57a46) Thanks [@jxom](https://github.com/jxom)! - Added `getStorageAt`

## 0.0.1-alpha.18

### Patch Changes

- [`7afdee8`](https://github.com/wagmi-dev/viem/commit/7afdee87cda6cebeeb9446773b6373ab680f7207) Thanks [@jxom](https://github.com/jxom)! - Added `readContract`

## 0.0.1-alpha.17

### Patch Changes

- [`ac69d16`](https://github.com/wagmi-dev/viem/commit/ac69d1675e70624919dc564f73ab91064c683a52) Thanks [@jxom](https://github.com/jxom)! - Added `writeContract`.

* [`ac69d16`](https://github.com/wagmi-dev/viem/commit/ac69d1675e70624919dc564f73ab91064c683a52) Thanks [@jxom](https://github.com/jxom)! - **Breaking**: Replaced `callContract` with `simulateContract`.

- [#44](https://github.com/wagmi-dev/viem/pull/44) [`f908190`](https://github.com/wagmi-dev/viem/commit/f90819098e11a2415d1220a6e857c45b09450885) Thanks [@0xOlias](https://github.com/0xOlias)! - Added `getLogs` action.

## 0.0.1-alpha.16

### Patch Changes

- [`9f386f5`](https://github.com/wagmi-dev/viem/commit/9f386f5737a228a57d1376992cd5a1374ed69262) Thanks [@jxom](https://github.com/jxom)! - Added sourcemaps

## 0.0.1-alpha.15

### Patch Changes

- [`a74d643`](https://github.com/wagmi-dev/viem/commit/a74d6438d3a1263b3b6616e0b7ec80791945c870) Thanks [@jxom](https://github.com/jxom)! - **Breaking**: Removed the `viem/actions` export in favor of `viem/public`, `viem/test` & `viem/wallet` exports.

## 0.0.1-alpha.14

### Patch Changes

- [`257c8f3`](https://github.com/wagmi-dev/viem/commit/257c8f34c83a05da7226fd84565535ffe4dc4a6a) Thanks [@jxom](https://github.com/jxom)! - Added `getBytecode`.

## 0.0.1-alpha.13

### Patch Changes

- [`8799a49`](https://github.com/wagmi-dev/viem/commit/8799a490b8b08fb90cd6edcdc1551f6b6e96bc64) Thanks [@jxom](https://github.com/jxom)! - Added `deployContract`

## 0.0.1-alpha.12

### Patch Changes

- [`6a47671`](https://github.com/wagmi-dev/viem/commit/6a47671ce9fe01f01cb744d85ac4e12674ef5b36) Thanks [@jxom](https://github.com/jxom)! - Fixed published `package.json`.

## 0.0.1-alpha.11

### Patch Changes

- [#37](https://github.com/wagmi-dev/viem/pull/37) [`32e2b76`](https://github.com/wagmi-dev/viem/commit/32e2b7649697a8143e1e6f2c2080570fb6b1a80b) Thanks [@jxom](https://github.com/jxom)! - Support CJS

* [`43700d9`](https://github.com/wagmi-dev/viem/commit/43700d94660ee2478d867fcf4abcc0dac64f90d0) Thanks [@jxom](https://github.com/jxom)! - Fixed issue where preinstall/postinstall scripts were being published to NPM.

## 0.0.1-alpha.10

### Patch Changes

- [#31](https://github.com/wagmi-dev/viem/pull/31) [`1f65640`](https://github.com/wagmi-dev/viem/commit/1f65640caa44957f38f68971e9b56d8e9229031d) Thanks [@jxom](https://github.com/jxom)! - Added initial `callContract` implementation

## 0.0.1-alpha.9

### Patch Changes

- [`976fd86`](https://github.com/wagmi-dev/viem/commit/976fd86ed55cb1931ba619c116db2753cf72a10b) Thanks [@jxom](https://github.com/jxom)! - Added `decodeDeployData`.

## 0.0.1-alpha.8

### Patch Changes

- [`9120e26`](https://github.com/wagmi-dev/viem/commit/9120e26fabe5d70ef13be7bc6eabfc966e3c4a29) Thanks [@jxom](https://github.com/jxom)! - Added `encodeErrorResult`.

## 0.0.1-alpha.7

### Patch Changes

- [`c52ce66`](https://github.com/wagmi-dev/viem/commit/c52ce660d62f3d44499ea13b88a883b76dd5fe08) Thanks [@jxom](https://github.com/jxom)! - Added `decodeErrorResult`.

* [`497b0b1`](https://github.com/wagmi-dev/viem/commit/497b0b1ce4c3585092fda1b6a9fd0526a0414c4d) Thanks [@jxom](https://github.com/jxom)! - Added `encodeEventTopics`.

## 0.0.1-alpha.6

### Patch Changes

- [`94b32ab`](https://github.com/wagmi-dev/viem/commit/94b32ab85be156bf25fd64056532edc1d4441c70) Thanks [@jxom](https://github.com/jxom)! - Added `encodeDeployData`.

## 0.0.1-alpha.5

### Patch Changes

- [`ee4d256`](https://github.com/wagmi-dev/viem/commit/ee4d256a50e4312614501b15c6b5f9b7b3220be3) Thanks [@jxom](https://github.com/jxom)! - Added `encodeFunctionResult`.

## 0.0.1-alpha.4

### Patch Changes

- [`f2e6bb1`](https://github.com/wagmi-dev/viem/commit/f2e6bb1fee06ccd51c7b3a22accd01259daece0f) Thanks [@jxom](https://github.com/jxom)! - Added `decodeFunctionResult`.

## 0.0.1-alpha.3

### Patch Changes

- [`849653f`](https://github.com/wagmi-dev/viem/commit/849653f246422c75487c141e94509920563f6706) Thanks [@jxom](https://github.com/jxom)! - - **Breaking**: Renamed `encodeFunctionParams` to `encodeFunctionData`.
  - Added `decodeFunctionData`.

## 0.0.1-alpha.2

### Patch Changes

- [#18](https://github.com/wagmi-dev/viem/pull/18) [`bb9e88a`](https://github.com/wagmi-dev/viem/commit/bb9e88a7fd1156550fe69a37d82fc67f2f63439b) Thanks [@jxom](https://github.com/jxom)! - Added `encodeFunctionParams`.

## 0.0.1-alpha.1

### Patch Changes

- [`d722728`](https://github.com/wagmi-dev/viem/commit/d722728e8d54065b5f9882ec6146c194de4b3c62) Thanks [@jxom](https://github.com/jxom)! - - **Breaking**: Renamed `ethereumProvider` Transport to `custom`.
  - **Breaking**: Refactored Transport APIs.
  - **Breaking**: Flattened `sendTransaction`, `call` & `estimateGas` APIs.
  - Added `encodeAbi` & `decodeAbi`.
  - Added `fallback` Transport.
  - Added `getFilterLogs`.
