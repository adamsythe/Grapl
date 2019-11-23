export const SET_CURRENT_QUESTION_ID = 'SET_CURRENT_QUESTION_ID'
export const setCurrentQuestionId = id => {
  return {
    type: SET_CURRENT_QUESTION_ID,
    id,
  }
}
