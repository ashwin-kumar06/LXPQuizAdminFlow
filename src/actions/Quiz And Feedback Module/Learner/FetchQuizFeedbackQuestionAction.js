export const FETCH_QUIZFEEDBACKQUESTION_REQUEST = "FETCH_QUIZFEEDBACKQUESTION_REQUEST";
export const FETCH_QUIZFEEDBACKQUESTION_SUCCESS = "FETCH_QUIZFEEDBACKQUESTION_SUCCESS";
export const FETCH_QUIZFEEDBACKQUESTION_FAILURE = "FETCH_QUIZFEEDBACKQUESTION_FAILURE";
 
export const fetchquizfeedbackquestionrequest = (quizId) => ({
  type:FETCH_QUIZFEEDBACKQUESTION_REQUEST,
  payload:quizId,
});
 
export const fetchquizfeedbackquestionSuccess = (quizfeedbackquestions) => ({
  type:FETCH_QUIZFEEDBACKQUESTION_SUCCESS,
  payload:quizfeedbackquestions,
});
 
export const fetchquizfeedbackquestionFailure = (error) => ({
  type:FETCH_QUIZFEEDBACKQUESTION_FAILURE,
  payload: error,
});