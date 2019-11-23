import { SET_EXPERTS } from '../actions/Experts'

const initialState = {
  experts: [],
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EXPERTS: {
      return {
        ...state,
        experts: action.experts,
      }
    }
    default:
      return state
  }
}