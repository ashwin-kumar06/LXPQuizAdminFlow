// Action types
export const EDIT_QUIZ_DETAILS_REQUEST = 'EDIT_QUIZ_DETAILS_REQUEST';
export const EDIT_QUIZ_DETAILS_SUCCESS = 'EDIT_QUIZ_DETAILS_SUCCESS';
export const EDIT_QUIZ_DETAILS_FAILURE = 'EDIT_QUIZ_DETAILS_FAILURE';

export const editQuizDetailsRequest = (data) => ({
    type: EDIT_QUIZ_DETAILS_REQUEST,
    payload: data
});
export const editQuizDetailsSuccess = (editQuizDetails) => ({
    type: EDIT_QUIZ_DETAILS_SUCCESS,
    payload: editQuizDetails
});
export const editQuizDetailsFailure = (error) => ({
    type: EDIT_QUIZ_DETAILS_FAILURE,
    payload: error
});
