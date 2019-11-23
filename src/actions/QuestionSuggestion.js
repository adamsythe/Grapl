export const SET_SUGGESTION = 'SET_SUGGESTION'
export const setSuggestion = suggestion => {
  return {
    type: SET_SUGGESTION,
    suggestion,
  }
}