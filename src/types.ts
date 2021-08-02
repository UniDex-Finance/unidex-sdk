interface PlaceLimitOrderTxRequest {
  chainId: number;
  account: string;
  sellToken: string;
  sellAmount: string;
  buyToken: string;
  buyAmount: string;
}

interface CancelLimitOrderTxRequest {
  account: string;
  chainId: number;
  module: string;
  inputToken: string;
  outputToken: string;
  minReturn: string;
  owner: string;
  witness: string;
}

interface FetchLimitOrdersTxRequest {
  account: string;
  chainId: number;
  includeCancelled: boolean;
  includeExecuted: boolean;
}

interface Transaction {
  to: string;
  from?: string;
  data: any;
  value?: string;
  gasLimit?: string;
}

interface OpenLimitOrder {
  id: string;
  blockNumber: string;
  createdAt: string;
  inputToken: string;
  inputAmount: string;
  outputToken: string;
  minReturn: string;
  module: string;
  owner: string;
  witness: string;
  createdTxHash: string;
  executedTxHash: string;
  cancelledTxHash: string;
  vault: string;
  updatedAt: string;
}
