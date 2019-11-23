import { SET_QUESTION } from '../actions/Question'

const initialState = {
  question: '',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUESTION: {
      return {
        ...state,
        question: action.question,
      }
    }
    default:
      return state
  }
}