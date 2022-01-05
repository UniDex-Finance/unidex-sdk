import LimitOrdersApi from './index';

const request = {
  chainId: 137,
  account: '0xe9F7B6F81883F321EFb8beed766e873C4E01EC4b',
  sellToken: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  sellAmount: '1000000000000000000',
  buyToken: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  buyAmount: '799936000000000000',
  includeCancelled: false,
  includeExecuted: false
};

LimitOrdersApi.placeOrder(request).then(d => {
  console.log(d);
});

LimitOrdersApi.listOrders(request).then(d => {
  console.log(d);
});

const cancelRequest = {
  account: '0xe9F7B6F81883F321EFb8beed766e873C4E01EC4b',
  chainId: 137,
  inputToken: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  minReturn: '1000000000000000',
  module: '0x984fd5cd16b73c43d60ee6c5ad82c579fa36a840',
  outputToken: '0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc',
  owner: '0xe9f7b6f81883f321efb8beed766e873c4e01ec4b',
  witness: '0xca7af4d0a59356831feab3bc931e650f7bfcf7f9'
};

LimitOrdersApi.cancelOrder(cancelRequest).then(d => {
  console.log(d);
});
