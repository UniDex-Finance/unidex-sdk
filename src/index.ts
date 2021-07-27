import axios from "axios";

const objToQueryParams = (obj: any) =>
  Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');

const BASE_URL = 'https://unidex-backend.herokuapp.com'

class LimitOrders {

  static async placeOrder(request: PlaceLimitOrderTxRequest): Promise<Transaction> {
    const params = objToQueryParams(request);
    const url = `${BASE_URL}/orders/limit?${params}`;
    const { data } = await axios.get(url);

    console.log(data);

    return data;
  }
}

const request = {
  chainId: 137,
  account: '0xe9F7B6F81883F321EFb8beed766e873C4E01EC4b',
  sellToken: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  sellAmount: '1000000000000000000',
  buyToken: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  buyAmount: '799936000000000000',
}

LimitOrders.placeOrder(request).then(d => {
  console.log(d);
})
