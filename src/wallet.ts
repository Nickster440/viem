export {
  addChain,
  getAddresses,
  getPermissions,
  requestAddresses,
  requestPermissions,
  sendTransaction,
  signMessage,
  signTypedData,
  switchChain,
  watchAsset,
} from './actions/wallet/index.js'
export type {
  AddChainParameters,
  FormattedTransactionRequest,
  GetPermissionsReturnType,
  GetAddressesReturnType,
  RequestAddressesReturnType,
  RequestPermissionsReturnType,
  SendTransactionParameters,
  SendTransactionReturnType,
  SignMessageParameters,
  SignMessageReturnType,
  SignTypedDataParameters,
  SignTypedDataReturnType,
  SwitchChainParameters,
  WatchAssetParameters,
  WatchAssetReturnType,
} from './actions/wallet/index.js'
