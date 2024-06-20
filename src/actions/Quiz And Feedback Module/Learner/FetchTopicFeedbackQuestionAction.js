export const FETCH_TOPICFEEDBACKQUESTION_REQUEST = "FETCH_TOPICFEEDBACKQUESTION_REQUEST";
export const FETCH_TOPICFEEDBACKQUESTION_SUCCESS = "FETCH_TOPICFEEDBACKQUESTION_SUCCESS";
export const FETCH_TOPICFEEDBACKQUESTION_FAILURE = "FETCH_TOPICFEEDBACKQUESTION_FAILURE";
 
export const fetchtopicfeedbackquestionrequest = (topicId) => ({
  type:FETCH_TOPICFEEDBACKQUESTION_REQUEST,
  payload:topicId,
});
 
export const fetchtopicfeedbackquestionSuccess = (topicfeedbackquestions) => ({
  type:FETCH_TOPICFEEDBACKQUESTION_SUCCESS,
  payload: topicfeedbackquestions,
});
 
export const fetchtopicfeedbackquestionFailure = (error) => ({
  type:FETCH_TOPICFEEDBACKQUESTION_FAILURE,
  payload: error,
});