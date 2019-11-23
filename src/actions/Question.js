export const SET_QUESTION = 'SET_QUESTION'
export const setQuestion = question => {
  return {
    type: SET_QUESTION,
    question,
  }
}

export const SET_ANSWER = 'SET_ANSWER'
export const setAnswer = answer => {
  return {
    type: SET_ANSWER,
    answer,
  }
}
