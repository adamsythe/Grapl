import {
  takeEvery, call, put, select, all, takeLatest,
} from 'redux-saga/effects'
import {
  Alert,
} from 'react-native'
import { SEND_QUESTION_MESSAGE, setQuestionMessage } from '../actions/QuestionMessage'

import { getQuestionMessage } from '../selectors'

function* sendMessage() {
  const message = yield select(getQuestionMessage)
  if (!message) {
    Alert.alert(
  'Message',
  'You must include some text in your message',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: true},
)
  }
  const response = true
  if (response) {
    Alert.alert(
  'Message',
  'Your message was delivered',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: true},
)
    yield put(setQuestionMessage(''))
  } else {
    Alert.alert(
  'Message',
  'Your message failed to deliver',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: true},
)
  }
}

export function* watchOnSendQuestionMessage() {
  yield takeLatest(SEND_QUESTION_MESSAGE, sendMessage)
}
