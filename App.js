import React from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import AppHome from './src/App';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppHome />
      </PersistGate>
    </Provider>
  );
}

export default App;