export const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';

export const fetchQuizByIdRequest = () => ({
    type: FETCH_QUIZ_REQUEST
});
export const fetchQuizByIdSuccess = editQuiz => ({
    type: FETCH_QUIZ_SUCCESS,
    payload: editQuiz
});