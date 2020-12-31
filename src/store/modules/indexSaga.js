import { all } from 'redux-saga/effects';
import products from './Products/ProductsSagas';
export default function* rootSaga() {
    return yield all([
        products
    ]);
}