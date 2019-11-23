import { SET_FAVORITE_ANSWERS } from '../actions/FavoriteAnswers'

const initialState = {
  favoriteAnswers: [],
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FAVORITE_ANSWERS: {
      return {
        ...state,
        favoriteAnswers: action.answers,
      }
    }
    default:
      return state
  }
}
