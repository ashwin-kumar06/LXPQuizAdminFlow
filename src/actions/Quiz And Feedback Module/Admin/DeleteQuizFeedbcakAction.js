
export const DELETE_QUIZFEEDBACK_REQUEST = "DELETE_QUIZFEEDBACK_REQUEST";
export const DELETE_QUIZFEEDBACK_SUCCESS = "DELETE_QUIZFEEDBACK_SUCCESS";
export const DELETE_QUIZFEEDBACK_FAILURE = "DELETE_QUIZFEEDBACK_FAILURE";

export const deletequizfeedbackRequest = (quizFeedbackQuestionId) => ({
  type: DELETE_QUIZFEEDBACK_REQUEST,
  payload: quizFeedbackQuestionId,
});

export const deletequizfeedbackSuccess = (quizfeedback) => ({
  type: DELETE_QUIZFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const deletequizfeedbackFailure = (error) => ({
  type: DELETE_QUIZFEEDBACK_FAILURE,
  payload: error,
});

