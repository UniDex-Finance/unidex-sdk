## Unidex SDK

This SDK helps you interact with The Unidex backend. Please see https://unidexexchange.gitbook.io/unidex/api-information/
for a description on how to manually connect to our API.


### Installation

In your favorite package manager:

```bash
npm install @unidexexchange/sdk
```

In your code:

```typescript
import LimitOrdersApi from '@unidex/sdk';

function SubmitLimitOrder() {
  // get order details
  const tx = await LimitOrdersApi.placeOrder(request);
  submitTransaction(tx);
}
```

### Typical Flow

Most users will use this library to submit limit orders to Unidex's backend. As shown in the
example above, the first step is to call `placeOrder`. Once this is done, an order will be executed
by our contracts in the background and balances on the blockchain will be updated. 

If a user desires to cancel a previously submitted order, they must fetch all pertinent information
using `listOrders` and subsequently, submit the result of `cancelOrder` to the blockchain.

Below we provide a description of the API. Most names are selfexplanatory.

### API

#### LimitOrdersApi.listOrders

Fetch all orders for an account/network.

Request:
```typescript
interface FetchLimitOrdersTxRequest {
  account: string;
  chainId: number;
  includeCancelled: boolean;
  includeExecuted: boolean;
}
```

Response:
A list of `OpenLimitOrder`s

```typescript
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
```

#### LimitOrdersApi.placeOrder

Fetch the EVM transaction that creates a Limit Order in the Unidex system. The returned
transaction should be submitted to the blockchain.

Request:
```typescript
interface PlaceLimitOrderTxRequest {
  chainId: number;
  account: string;
  sellToken: string;
  sellAmount: string;
  buyToken: string;
  buyAmount: string;
}
```

Response: Transaction to be submitted

```typescript
interface Transaction {
  to: string;
  from?: string;
  data: any;
  value?: string;
  gasLimit?: string;
}
```

#### LimitOrdersApi.cancelOrder

Cancel an already submitted limit order. Make sure all the parameters matched those returned
by `listOrders`

Request:

```typescript
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
```

Response:

```typescript
interface Transaction {
  to: string;
  from?: string;
  data: any;
  value?: string;
  gasLimit?: string;
}
```
