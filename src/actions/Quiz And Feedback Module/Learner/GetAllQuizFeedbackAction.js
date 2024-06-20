export const FETCH_ALL_QUIZFEEDBACK_REQUEST =
  "FETCH_ALL_ALL_QUIZFEEDBACK_REQUEST";
export const FETCH_ALL_QUIZFEEDBACK_SUCCESS = "FETCH_ALL_QUIZFEEDBACK_SUCCESS";
export const FETCH_ALL_QUIZFEEDBACK_FAILURE = "FETCH_ALL_QUIZFEEDBACK_FAILURE";

export const fetchallquizfeedbackRequest = (formData) => ({
  type: FETCH_ALL_QUIZFEEDBACK_REQUEST,
  payload: formData,
});

export const fetchallquizfeedbackSuccess = (quizfeedback) => ({
  type: FETCH_ALL_QUIZFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const fetchallquizfeedbackFailure = (error) => ({
  type: FETCH_ALL_QUIZFEEDBACK_FAILURE,
  payload: error,
});
