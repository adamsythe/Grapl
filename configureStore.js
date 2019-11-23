import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './src/reducers'

import rootSaga from './src/sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = []
middlewares.push(sagaMiddleware)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['error'],
}

const pReducer = persistReducer(persistConfig, combineReducers({
  rootReducer,
}))

export default function configureStore() {
  const store = createStore(pReducer, applyMiddleware(...middlewares))
  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}