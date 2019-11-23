import { all, fork } from 'redux-saga/effects'

import {
  watchOnAppStart,
} from './OnStart'

import {
  watchOnSendQuestionMessage,
} from './QuestionMessage'


export default function* rootSaga() {
  yield all([
  	fork(watchOnAppStart),
  	fork(watchOnSendQuestionMessage),
  ])
}
