import { SET_SUGGESTION } from '../actions/QuestionSuggestion'

const initialState = {
  suggestion: '',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SUGGESTION: {
      return {
        ...state,
        suggestion: action.suggestion,
      }
    }
    default:
      return state
  }
}