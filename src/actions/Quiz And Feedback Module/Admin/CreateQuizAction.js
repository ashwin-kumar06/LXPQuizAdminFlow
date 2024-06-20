// Action types
export const SET_QUIZ_DETAILS_REQUEST = 'SET_QUIZ_DETAILS_REQUEST';
export const SET_QUIZ_DETAILS_SUCCESS = 'SET_QUIZ_DETAILS_SUCCESS';
export const SET_QUIZ_DETAILS_FAILURE = 'SET_QUIZ_DETAILS_FAILURE';

export const setQuizDetailsRequest = (formData) => ({
    type: SET_QUIZ_DETAILS_REQUEST,
    payload: formData
});
export const setQuizDetailsSuccess = (quizDetails) => ({
    type: SET_QUIZ_DETAILS_SUCCESS,
    payload: quizDetails
});
export const setQuizDetailsFailure = (error) => ({
    type: SET_QUIZ_DETAILS_FAILURE,
    payload: error
});
