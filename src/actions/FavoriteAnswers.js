export const SET_FAVORITE_ANSWERS = 'SET_FAVORITE_EXPERTS'
export const setFavoriteAnswers = answers => {
  return {
    type: SET_FAVORITE_ANSWERS,
    answers,
  }
}

export const FETCH_FAVORITE_ANSWERS = 'FETCH_FAVORITE_ANSWERS'
export const fetchFavoriteAnswers = () => {
  return {
    type: FETCH_FAVORITE_ANSWERS,
  }
}
