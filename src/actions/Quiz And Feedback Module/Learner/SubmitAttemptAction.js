// src/actions/SubmitAttemptAction.js
export const SUBMIT_ATTEMPT_REQUEST = 'SUBMIT_ATTEMPT_REQUEST';
export const SUBMIT_ATTEMPT_SUCCESS = 'SUBMIT_ATTEMPT_SUCCESS';
export const SUBMIT_ATTEMPT_FAILURE = 'SUBMIT_ATTEMPT_FAILURE';

export const submitAttemptRequest = (AttemptId) => {
  console.log("Submit Action attempt ID :", AttemptId);
  return {
    type: SUBMIT_ATTEMPT_REQUEST,
    payload: { AttemptId }
  }
};

export const submitAttemptSuccess = (data) => ({
  type: SUBMIT_ATTEMPT_SUCCESS,
  payload: data,
});

export const submitAttemptFailure = (error) => ({
  type: SUBMIT_ATTEMPT_FAILURE,
  payload: error,
});