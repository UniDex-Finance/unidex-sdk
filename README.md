## Unidex SDK

This SDK helps you interact with The Unidex backend. Please see https://unidexexchange.gitbook.io/unidex/api-information/
for a description on how to manually connect to our API.


### Installation

In your favorite package manager:

```bash
npm install @unidex/sdk
```

In your code:

```typescript
import LimitOrdersApi from '@unidex/sdk';

function SubmitLimitOrder() {
  // get order details
  const tx = LimitOrdersApi.placeOrder(request);
  submitTransaction(tx);
}
```

