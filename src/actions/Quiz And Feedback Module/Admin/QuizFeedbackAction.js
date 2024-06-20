export const CREATE_QUIZFEEDBACK_REQUEST = "CREATE_QUIZFEEDBACK_REQUEST";
export const CREATE_QUIZFEEDBACK_SUCCESS = "CREATE_QUIZFEEDBACK_SUCCESS";
export const CREATE_QUIZFEEDBACK_FAILURE = "CREATE_QUIZFEEDBACK_FAILURE";

export const createquizfeedbackRequest = (formData) => ({
  type: CREATE_QUIZFEEDBACK_REQUEST,
  payload: formData,
});

export const createquizfeedbackSuccess = (quizfeedback) => ({
  type: CREATE_QUIZFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const createquizfeedbackFailure = (error) => ({
  type: CREATE_QUIZFEEDBACK_FAILURE,
  payload: error,
});
