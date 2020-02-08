import { call, put } from 'redux-saga/effects';
import { requestStarted, requestFinished } from '../actions/requestActions';
import { batchAddItemsToCart } from '../actions/cartActions';

const productsUrl = 'http://demo8149139.mockable.io/products';
const fetchProducts = async () => {
  const payload = await fetch(productsUrl)
    .then(res => {
      let data = {};

      if (res.ok) {
        data = res.json();
      }

      return data;
    })
    .catch(error => {
      console.log(error);
      return {};
    })
    .then(data => data);

  return payload;
};

export default function* () {
  yield put(requestStarted());
  const payload = yield call(fetchProducts);
  yield put(batchAddItemsToCart(payload));
  yield put(requestFinished());
}
