export const FETCH_COURSESCORE_REQUEST = 'FETCH_COURSESCORE_REQUEST';
export const FETCH_COURSESCORE_SUCCESS = 'FETCH_COURSESCORE_SUCCESS';
export const FETCH_COURSESCORE_FAILURE = 'FETCH_COURSESCORE_FAILURE';




export const fetchCourseScoreRequest = (LearnerId) => ({
    type: FETCH_COURSESCORE_REQUEST,
    payload: LearnerId
});



export const fetchCourseScoreSuccess = (score) => ({
    type: FETCH_COURSESCORE_SUCCESS,
    payload: score
});



export const fetchCourseScoreFailure = (error) => ({
    type: FETCH_COURSESCORE_FAILURE,
    payload: error
});