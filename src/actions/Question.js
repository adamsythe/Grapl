export const SET_QUESTION = 'SET_QUESTION'
export const setQuestion = question => {
  return {
    type: SET_QUESTION,
    question,
  }
}