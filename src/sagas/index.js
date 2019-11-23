import { all, fork } from 'redux-saga/effects'

import {
  watchOnAppStart,
} from './OnStart'

export default function* rootSaga() {
  yield all([
  	fork(watchOnAppStart),
  ])
}