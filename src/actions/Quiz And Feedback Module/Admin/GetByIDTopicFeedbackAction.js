
export const FETCH_TOPICFEEDBACK_REQUEST = "FETCH_TOPICFEEDBACK_REQUEST";
export const FETCH_TOPICFEEDBACK_SUCCESS = "FETCH_TOPICFEEDBACK_SUCCESS";
export const FETCH_TOPICFEEDBACK_FAILURE = "FETCH_TOPICFEEDBACK_FAILURE";

export const fetchtopicfeedbackRequest = (topicFeedbackId) => ({
  type: FETCH_TOPICFEEDBACK_REQUEST,
  payload: topicFeedbackId,
});

export const fetchtopicfeedbackSuccess = (quizfeedback) => ({
  type: FETCH_TOPICFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const fetchtopicfeedbackFailure = (error) => ({
  type: FETCH_TOPICFEEDBACK_FAILURE,
  payload: error,
});