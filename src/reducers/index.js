import { combineReducers } from 'redux'
import Question from './Question'
import Experts from './Experts'
import User from './User'
import QuestionMessage from './QuestionMessage'
import QuestionSuggestion from './QuestionSuggestion'
import FavoriteAnswers from './FavoriteAnswers'

const appReducer = combineReducers({
	Question,
	Experts,
	User,
	QuestionMessage,
	QuestionSuggestion,
	FavoriteAnswers,
})

const rootReducer = (state, action) => {
	if (action.type === 'SIGN_OUT') {
		Object.keys(state).forEach(key => {
		  storage.removeItem(`persist:${key}`)
		})
		/* eslint-disable-next-line */
	  state = undefined
	}
  return appReducer(state, action)
}

export default rootReducer
