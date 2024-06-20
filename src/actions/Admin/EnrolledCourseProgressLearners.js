export const FETCH_ENROLL_PROGRESS_COURSE_LEARNER_REQUEST = "FETCH_ENROLL_PROGRESS_COURSE_LEARNER_REQUEST";
export const FETCH_ENROLL_PROGRESS_COURSE_LEARNER_SUCCESS = "FETCH_ENROLL_PROGRESS_COURSE_LEARNER_SUCCESS";
export const FETCH_ENROLL_PROGRESS_COURSE_LEARNER_FAILURE = "FETCH_ENROLL_PROGRESS_COURSE_LEARNER_FAILURE";

export const fetchEnrollProgressCourseLearnerRequest = (courseId) => ({
    type: FETCH_ENROLL_PROGRESS_COURSE_LEARNER_REQUEST,
    payload: courseId
})

export const fetchEnrollProgressCourseLearnerSuccess = (learners) => ({
    type: FETCH_ENROLL_PROGRESS_COURSE_LEARNER_SUCCESS,
    payload: learners
})

export const fetchEnrollProgressCourseLearnerFailure = (error) => ({
    type: FETCH_ENROLL_PROGRESS_COURSE_LEARNER_FAILURE,
    payload: error
})