import {
  SET_CURRENT_QUESTION_ID,
  SET_AGE,
  SET_GENDER,
  SET_SEX_ORIENT,
  SET_RACE,
} from '../actions/User'

const initialState = {
  currentQuestionId: null,
  age: null,
  gender: null,
  race: null,
  sexOrient: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION_ID: {
      return {
        ...state,
        currentQuestionId: action.id,
      }
    }
    case SET_AGE: {
      return {
        ...state,
        age: action.age,
      }
    }
    case SET_GENDER: {
      return {
        ...state,
        gender: action.gender,
      }
    }
    case SET_RACE: {
      return {
        ...state,
        race: action.race,
      }
    }
    case SET_SEX_ORIENT: {
      return {
        ...state,
        sexOrient: action.sexOrient,
      }
    }
    default:
      return state
  }
}
