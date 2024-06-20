export const FETCH_COURSES_TOPICS_SCORES_REQUEST = 'FETCH_COURSES_TOPICS_SCORES_REQUEST';
export const FETCH_COURSES_TOPICS_SCORES_SUCCESS = 'FETCH_COURSES_TOPICS_SCORES_SUCCESS';
export const FETCH_COURSES_TOPICS_SCORES_FAILURE = 'FETCH_COURSES_TOPICS_SCORES_FAILURE';

export const fetchCoursesTopicsScoresRequest = (learnerId) => ({
    type: FETCH_COURSES_TOPICS_SCORES_REQUEST,
    payload: learnerId
});

export const fetchCoursesTopicsScoresSuccess = (scoreProgress) => ({
    type: FETCH_COURSES_TOPICS_SCORES_SUCCESS,
    payload: scoreProgress
});

export const fetchCoursesTopicsScoresFailure = (error) => ({
    type: FETCH_COURSES_TOPICS_SCORES_FAILURE,
    payload: error,
});