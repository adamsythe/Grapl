import { SET_QUESTION, SET_ANSWER } from '../actions/Question'

const initialState = {
  question: '',
  answer: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUESTION: {
      return {
        ...state,
        question: action.question,
        answer: null,
      }
    }
    case SET_ANSWER: {
      return {
        ...state,
        answer: action.answer,
      }
    }
    default:
      return state
  }
}
