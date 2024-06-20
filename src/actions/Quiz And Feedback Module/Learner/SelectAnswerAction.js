export const SELECT_ANSWER_REQUEST = ' SELECT_ANSWER_REQUEST';
export const SELECT_ANSWER_SUCCESS = ' SELECT_ANSWER_SUCCESS';
export const SELECT_ANSWER_FAILURE = ' SELECT_ANSWER_FAILURE';
export const SELECT_ANSWER_STATUS = ' SELECT_ANSWER_STATUS';

export const selectAnswerRequest = (answerData) => ({
  type: SELECT_ANSWER_REQUEST,
  payload: answerData,
});

export const selectAnswerSuccess = (data) => ({
  type: SELECT_ANSWER_SUCCESS,
  payload: data,
});

export const selectAnswerFailure = (error) => ({
  type: SELECT_ANSWER_FAILURE,
  payload: error,
});

export const  selectAnswerStatus = (isRequesting) => ({
    type: SELECT_ANSWER_STATUS,
    payload: isRequesting,
  });