import { SET_CURRENT_QUESTION_ID } from '../actions/User'

const initialState = {
  currentQuestionId: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION_ID: {
      return {
        ...state,
        currentQuestionId: action.id,
      }
    }
    default:
      return state
  }
}
