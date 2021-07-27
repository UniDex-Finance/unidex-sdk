interface PlaceLimitOrderTxRequest {
  chainId: number
  account: string
  sellToken: string
  sellAmount: string
  buyToken: string
  buyAmount: string
}

interface CancelLimitOrderTxRequest {
  account: string
  chainId: number
  module: string
  inputToken: string
  outputToken: string
  minReturn: string
  owner: string
  witness: string
}

interface FetchLimitOrdersTxRequest {
  account: string
  chainId: number
}

interface Transaction {
  to: string
  from?: string
  data: any
  value?: string
  gasLimit?: string
}

interface OpenLimitOrder {
  createdAt: string;
  inputToken: string;
  inputAmount: string;
  outputToken: string;
  minReturn: string;
  module: string;
  owner: string;
  witness: string;
}
