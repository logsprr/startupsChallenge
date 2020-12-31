import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';
import { loadFailedProducts, loadAllProducts } from './ProductsActions';


export function* load() {
    try {
        const response = yield call(api.get, 'products');
        console.log(response.status == 200);
        if (response.status == 200) {
            yield put(loadAllProducts(response.data));
        } else {
            yield put(loadFailedProducts());
        }
    } catch (error) {
        yield put(loadFailedProducts());
    }
}

export default all([takeLatest(ListTypesRequest.LOAD_ALL_PRODUCTS, load)]);