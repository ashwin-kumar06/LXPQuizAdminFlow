export const UPDATE_TOPICFEEDBACK_REQUEST = "UPDATE_TOPICFEEDBACK_REQUEST";
export const UPDATE_TOPICFEEDBACK_SUCCESS = "UPDATE_TOPICFEEDBACK_SUCCESS";
export const UPDATE_TOPICFEEDBACK_FAILURE = "UPDATE_TOPICFEEDBACK_FAILURE";

export const updatetopicfeedbackRequest = (topicFeedbackId, formData) => ({
  type: UPDATE_TOPICFEEDBACK_REQUEST,
  payload: {
    topicFeedbackId,
    formData,
  },
});

export const updatetopicfeedbackSuccess = (quizfeedback) => ({
  type: UPDATE_TOPICFEEDBACK_SUCCESS,
  payload: quizfeedback,
});

export const updatetopicfeedbackFailure = (error) => ({
  type: UPDATE_TOPICFEEDBACK_FAILURE,
  payload: error,
});
