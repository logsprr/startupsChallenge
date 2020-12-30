import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { offlineMiddleware, consumeActionMiddleware } from 'redux-offline-queue';
import { AsyncStorage } from 'react-native';
import rootReducer from "./modules/indexReducer";
import { REHYDRATE } from 'redux-persist'
//
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['offline']
}
//
const middlewares = [];


const persistedReducer = persistReducer(persistConfig, rootReducer);

//

middlewares.push(offlineMiddleware({
    additionalTriggers: REHYDRATE,
}));
//


middlewares.push(consumeActionMiddleware());
//
const store = createStore(
    persistedReducer
);


const persistor = persistStore(store);
export { store, persistor };
