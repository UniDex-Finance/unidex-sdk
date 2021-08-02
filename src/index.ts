import axios from 'axios';

const objToQueryParams = (obj: any) =>
  Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');

const BASE_URL = 'https://unidex-backend.herokuapp.com';

class LimitOrdersApi {
  static async listOrders(request: FetchLimitOrdersTxRequest): Promise<OpenLimitOrder[]> {
    const params = objToQueryParams(request);
    const url = `${BASE_URL}/orders/limit/list?${params}`;
    const { data } = await axios.get(url);

    return data;
  }

  static async placeOrder(request: PlaceLimitOrderTxRequest): Promise<Transaction> {
    const params = objToQueryParams(request);
    const url = `${BASE_URL}/orders/limit?${params}`;
    const { data } = await axios.get(url);

    return data.tx;
  }

  static async cancelOrder(request: CancelLimitOrderTxRequest): Promise<Transaction> {
    const { account, chainId, module, inputToken, outputToken, minReturn, owner, witness } = request;

    const params = objToQueryParams({
      account,
      chainId,
      module,
      inputToken,
      outputToken,
      minReturn,
      owner,
      witness
    });
    const url = `${BASE_URL}/orders/limit/cancel?${params}`;
    const { data } = await axios.get(url);

    return data.tx;
  }
}

export default LimitOrdersApi;
