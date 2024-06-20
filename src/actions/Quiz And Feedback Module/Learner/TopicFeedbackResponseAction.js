export const TOPICFEEDBACKRESPONSE_REQUEST = "TOPICFEEDBACKRESPONSE_REQUEST ";
export const TOPICFEEDBACKRESPONSE_SUCCESS = "TOPICFEEDBACKRESPONSE_SUCCESS";
export const TOPICFEEDBACKRESPONSE_FAILURE = "TOPICFEEDBACKRESPONSE_FAILURE";
 
export const topicfeedbackresponserequest = (topicId) => ({
  type:TOPICFEEDBACKRESPONSE_REQUEST,
  payload:topicId,
});
 
export const topicfeedbackresponseSuccess = (topicfeedbackquestions) => ({
  type:TOPICFEEDBACKRESPONSE_SUCCESS,
  payload: topicfeedbackquestions,
});
 
export const  topicfeedbackresponseFailure = (error) => ({
  type:TOPICFEEDBACKRESPONSE_FAILURE,
  payload: error,
});
 