import { applyMiddleware, createStore, como } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from "./modules/indexReducer";
import rootSaga from './modules/indexSaga';
//
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['offline']
}
//
let sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

//
const store = createStore(
    persistedReducer,
    applyMiddleware(
        sagaMiddleware
    )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export { store, persistor };
