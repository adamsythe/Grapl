export const SET_QUESTION_MESSAGE = 'SET_QUESTION_MESSAGE'
export const setQuestionMessage = message => {
  return {
    type: SET_QUESTION_MESSAGE,
    message,
  }
}

export const SEND_QUESTION_MESSAGE = 'SEND_QUESTION_MESSAGE'
export const sendQuestionMessage = () => {
  return {
    type: SEND_QUESTION_MESSAGE,
  }
}
