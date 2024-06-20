export const UPDATE_QUIZFEEDBACK_REQUEST = "UPDATE_QUIZFEEDBACK_REQUEST";
export const UPDATE_QUIZFEEDBACK_SUCCESS = "UPDATE_QUIZFEEDBACK_SUCCESS";
export const UPDATE_QUIZFEEDBACK_FAILURE = "UPDATE_QUIZFEEDBACK_FAILURE";

export const updatequizfeedbackRequest = (
  quizquestionfeedbackid,
  formData
) => ({
  type: UPDATE_QUIZFEEDBACK_REQUEST,
  payload: {
    quizquestionfeedbackid,
    formData,
  },
});

export const updatequizfeedbackSuccess = (quizfeedback) => ({
  type: UPDATE_QUIZFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const updatequizfeedbackFailure = (error) => ({
  type: UPDATE_QUIZFEEDBACK_FAILURE,
  payload: error,
});
