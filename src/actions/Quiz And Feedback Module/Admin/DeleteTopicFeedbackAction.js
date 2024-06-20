

export const DELETE_TOPICFEEDBACK_REQUEST = "DELETE_QUIZFEEDBACK_REQUEST";
export const DELETE_TOPICFEEDBACK_SUCCESS = "DELETE_QUIZFEEDBACK_SUCCESS";
export const DELETE_TOPICFEEDBACK_FAILURE = "DELETE_QUIZFEEDBACK_FAILURE";

export const deletetopicfeedbackRequest = (topicFeedbackId) => ({
  type: DELETE_TOPICFEEDBACK_REQUEST,
  payload: topicFeedbackId,
});

export const deletetopicfeedbackSuccess = (quizfeedback) => ({
  type: DELETE_TOPICFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const deletetopicfeedbackFailure = (error) => ({
  type: DELETE_TOPICFEEDBACK_FAILURE,
  payload: error,
});

