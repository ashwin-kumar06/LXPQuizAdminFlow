export const FETCH_QUIZFEEDBACK_REQUEST = "FETCH_QUIZFEEDBACK_REQUEST";
export const FETCH_QUIZFEEDBACK_SUCCESS = "FETCH_QUIZFEEDBACK_SUCCESS";
export const FETCH_QUIZFEEDBACK_FAILURE = "FETCH_QUIZFEEDBACK_FAILURE";

export const fetchquizfeedbackRequest = (quizfeedbackId) => ({
  type: FETCH_QUIZFEEDBACK_REQUEST,
  payload: quizfeedbackId,
});

export const fetchquizfeedbackSuccess = (quizfeedback) => ({
  type: FETCH_QUIZFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const fetchquizfeedbackFailure = (error) => ({
  type: FETCH_QUIZFEEDBACK_FAILURE,
  payload: error,
});
