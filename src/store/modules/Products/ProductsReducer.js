import { ListTypesRequest } from '../../../config/types';

const INITIAL_STATE = {
    dataCart: [],
    dataProducts: [],
    error: false,
    message: 'normal',
    loading: false,
    totalProducts: 0
};


export default function Products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ListTypesRequest.LOAD_ADD_PRODUCT:
            return { ...state, loading: false, dataCart: [...state.dataCart, action.payload.data], message: 'Adicionado', totalProducts: state.totalProducts + 1 };
        case ListTypesRequest.LOAD_UPDATE_PRODUCT:
            return { ...state, dataCart: action.payload.data, message: 'Atualizado', error: false, loading: false };
        case ListTypesRequest.LOAD_REMOVE_PRODUCT:
            return { ...state, dataCart: action.payload.data, message: 'Deletado', error: false, loading: false, totalProducts: state.totalProducts - 1 };
        case ListTypesRequest.LOAD_ALL_PRODUCTS:
            return { ...state, loading: true }
        case ListTypesRequest.LOAD_ALL_PRODUCTS_SUCCESS:
            return { ...state, loading: false, message: 'Carregados', error: false, dataProducts: action.payload.data }
        case ListTypesRequest.LOAD_FAILURE:
            return { ...state, loading: false, message: 'Error', error: true }
        case ListTypesRequest.LOAD_CLEAN:
            return {
                dataCart: [],
                dataProducts: state.dataProducts,
                error: false,
                message: 'normal',
                loading: false,
                totalProducts: 0
            };
        default:
            return state;
    }
}