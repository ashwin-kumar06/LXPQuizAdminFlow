export const FETCH_QUIZINSTRUCTION_REQUEST = 'FETCH_QUIZINSTRUCTION_REQUEST';
export const FETCH_QUIZINSTRUCTION_SUCCESS = 'FETCH_QUIZINSTRUCTION_SUCCESS';
export const FETCH_QUIZINSTRUCTION_FAILURE = 'FETCH_QUIZINSTRUCTION_FAILURE';
 
export const fetchQuizInstructionRequest = (topicId) => ({
    type: FETCH_QUIZINSTRUCTION_REQUEST,
    payload:topicId
});
export const fetchQuizInstructionSuccess = (quizinstructiondetails) => ({
    type: FETCH_QUIZINSTRUCTION_SUCCESS,
    payload:quizinstructiondetails
});
export const fetchQuizInstructionFailure = (error) => ({
    type: FETCH_QUIZINSTRUCTION_FAILURE,
    payload: error
});