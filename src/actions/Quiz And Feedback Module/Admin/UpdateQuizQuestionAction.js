export const UPDATE_QUIZ_QUESTION_REQUEST = "UPDATE_QUIZ_QUESTION_REQUEST";
export const UPDATE_QUIZ_QUESTION_SUCCESS = "UPDATE_QUIZ_QUESTION_SUCCESS";
export const UPDATE_QUIZ_QUESTION_FAILURE = "UPDATE_QUIZ_QUESTION_FAILURE";

export const updateQuizQuestionRequest = (formData) => ({
  type: UPDATE_QUIZ_QUESTION_REQUEST,
  payload: formData,
});

export const updateQuizQuestionSuccess = (editQuizQuestion) => ({
  type: UPDATE_QUIZ_QUESTION_SUCCESS,
  payload: editQuizQuestion,
});

export const updateQuizQuestionFailure = (error) => ({
  type: UPDATE_QUIZ_QUESTION_FAILURE,
  payload: error,
});
