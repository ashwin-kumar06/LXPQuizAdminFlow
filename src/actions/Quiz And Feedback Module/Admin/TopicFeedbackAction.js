export const CREATE_TOPICFEEDBACK_REQUEST = "CREATE_TOPICFEEDBACK_REQUEST";
export const CREATE_TOPICFEEDBACK_SUCCESS = "CREATE_TOPICFEEDBACK_SUCCESS";
export const CREATE_TOPICFEEDBACK_FAILURE = "CREATE_TOPICFEEDBACK_FAILURE";

export const createtopicRequest = (formData) => ({
  type: CREATE_TOPICFEEDBACK_REQUEST,
  payload: formData,
});

export const createtopicfeedbackSuccess = (TopicFeedback) => ({
  type: CREATE_TOPICFEEDBACK_SUCCESS,
  payload: TopicFeedback,
});

export const createtopicfeedbackFailure = (error) => ({
  type: CREATE_TOPICFEEDBACK_FAILURE,
  payload: error,
});
