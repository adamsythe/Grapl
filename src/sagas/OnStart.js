import {
  takeEvery, call, put, select, all, takeLatest,
} from 'redux-saga/effects'
import { FETCH_DATA } from '../actions/OnStart'
import { exampleQuestionData } from '../data/QuestionData'
import { setQuestion } from '../actions/Question'
import { setExperts } from '../actions/Experts'
import { setQuestionMessage } from '../actions/QuestionMessage'

import { getCurrentQuestionId } from '../selectors'

function* fetchQuestionData() {
  const questionData = exampleQuestionData
  const currentQuestionId = yield select(getCurrentQuestionId)
  if (currentQuestionId !== questionData.id) {
	  yield put(setCurrentQuestionId(questionData.id))
	  yield put(setQuestion(questionData.question))
	  yield put(setExperts(questionData.experts))
	  yield put(setQuestionMessage(''))
  }
}

export function* watchOnAppStart() {
  yield takeLatest(FETCH_DATA, fetchQuestionData)
}