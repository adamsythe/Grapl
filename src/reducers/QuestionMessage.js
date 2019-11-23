import {
  SET_QUESTION_MESSAGE,
  CLEAR_QUESTION_MESSAGE,
} from '../actions/QuestionMessage'

const initialState = {
  message: '',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUESTION_MESSAGE: {
      return {
        ...state,
        message: action.message,
      }
    }
    default:
      return state
  }
}
