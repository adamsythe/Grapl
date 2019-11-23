import {
  takeEvery, call, put, select, all, takeLatest,
} from 'redux-saga/effects'
import { FETCH_FAVORITE_ANSWERS, setFavoriteAnswers } from '../actions/FavoriteAnswers'
import { exampleFavoriteAnswers } from '../data/FavoriteAnswersData'

import { getCurrentQuestionId } from '../selectors'

function* fetchFavoriteAnswers() {
  const questionData = exampleFavoriteAnswers
  yield put(setFavoriteAnswers(questionData))
}

export function* watchOnFavoriteAnswersFetch() {
  yield takeLatest(FETCH_FAVORITE_ANSWERS, fetchFavoriteAnswers)
}
