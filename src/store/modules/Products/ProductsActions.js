import { action } from 'typesafe-actions';
import { ListTypesRequest } from '../../../config/types';

export const loadAllProducts = () => action(ListTypesRequest.LOAD_ALL_PRODUCTS)
export const addProduct = (data) => action(ListTypesRequest.LOAD_ADD_PRODUCT, { data })
export const updateProduct = (data) => action(ListTypesRequest.LOAD_UPDATE_PRODUCT, { data })
export const deleteProduct = (data) => action(ListTypesRequest.LOAD_REMOVE_PRODUCT, { data })
export const deleteAllProducts = () => action(ListTypesRequest.LOAD_CLEAN)