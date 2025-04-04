import type { Address } from '../../types/index.js'

const addressRegex = /^0x[a-fA-F0-9]{40}$/

export function isAddress(address: string): address is Address {
  return addressRegex.test(address)
}
