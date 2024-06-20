export const QUIZFEEDBACKRESPONSE_REQUEST = "QUIZFEEDBACKRESPONSE_REQUEST ";
export const QUIZFEEDBACKRESPONSE_SUCCESS = "QUIZFEEDBACKRESPONSE_SUCCESS";
export const QUIZFEEDBACKRESPONSE_FAILURE = "QUIZFEEDBACKRESPONSE_FAILURE";
 
export const quizfeedbackresponserequest = (quizId) => ({
  type:QUIZFEEDBACKRESPONSE_REQUEST,
  payload:quizId,
});
 
export const quizfeedbackresponseSuccess = (quizfeedbackquestions) => ({
  type:QUIZFEEDBACKRESPONSE_SUCCESS,
  payload: quizfeedbackquestions,
});
 
export const  quizfeedbackresponseFailure = (error) => ({
  type:QUIZFEEDBACKRESPONSE_FAILURE,
  payload: error,
});