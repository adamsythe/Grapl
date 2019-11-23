import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './configureStore'
import AppRoot from './src/components/AppRoot'

const { store, persistor } = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoot />
      </PersistGate>
    </Provider>
  );
}
