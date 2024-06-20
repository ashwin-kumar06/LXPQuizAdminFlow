export const FETCH_QUIZ_ID_REQUEST = 'FETCH_QUIZ_ID_REQUEST';
export const FETCH_QUIZ_ID_SUCCESS = 'FETCH_QUIZ_ID_SUCCESS';
export const FETCH_QUIZ_ID_FAILURE = 'FETCH_QUIZ_ID_FAILURE';

export const fetchQuizIdRequest = (topicId) => ({
    type: FETCH_QUIZ_ID_REQUEST,
    payload: topicId
});
export const fetchQuizIdSuccess = (quizId) => ({
    type: FETCH_QUIZ_ID_SUCCESS,
    payload: quizId
});
export const fetchQuizIdFailure = (error) => ({
    type: FETCH_QUIZ_ID_FAILURE,
    payload: error
});