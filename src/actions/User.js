export const SET_CURRENT_QUESTION_ID = 'SET_CURRENT_QUESTION_ID'
export const setCurrentQuestionId = id => {
  return {
    type: SET_CURRENT_QUESTION_ID,
    id,
  }
}

export const SET_AGE = 'SET_AGE'
export const setAge = age => {
  return {
    type: SET_AGE,
    age,
  }
}

export const SET_GENDER = 'SET_GENDER'
export const setGender = gender => {
  return {
    type: SET_GENDER,
    gender,
  }
}

export const SET_RACE = 'SET_RACE'
export const setRace = race => {
  return {
    type: SET_RACE,
    race,
  }
}

export const SET_SEX_ORIENT = 'SET_SEX_ORIENT'
export const setSexOrient = sexOrient => {
  return {
    type: SET_SEX_ORIENT,
    sexOrient,
  }
}
