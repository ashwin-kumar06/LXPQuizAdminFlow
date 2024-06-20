export const FETCH_ALL_TOPICFEEDBACK_REQUEST =
  "FETCH_ALL_TOPICFEEDBACK_REQUEST";
export const FETCH_ALL_TOPICFEEDBACK_SUCCESS =
  "FETCH_ALL_TOPICFEEDBACK_SUCCESS";
export const FETCH_ALL_TOPICFEEDBACK_FAILURE =
  "FETCH_ALL_TOPICFEEDBACK_FAILURE";

export const fetchalltopicfeedbackRequest = (formData) => ({
  type: FETCH_ALL_TOPICFEEDBACK_REQUEST,
  payload: formData,
});

export const fetchalltopicfeedbackSuccess = (topicfeedback) => ({
  type: FETCH_ALL_TOPICFEEDBACK_SUCCESS,
  payload: topicfeedback,
});

export const fetchalltopicfeedbackFailure = (error) => ({
  type: FETCH_ALL_TOPICFEEDBACK_FAILURE,
  payload: error,
});
