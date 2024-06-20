export const FETCH_ENROLL_PASS_COURSE_LEARNER_REQUEST = "FETCH_ENROLL_PASS_COURSE_LEARNER_REQUEST";
export const FETCH_ENROLL_PASS_COURSE_LEARNER_SUCCESS = "FETCH_ENROLL_PASS_COURSE_LEARNER_SUCCESS";
export const FETCH_ENROLL_PASS_COURSE_LEARNER_FAILURE = "FETCH_ENROLL_PASS_COURSE_LEARNER_FAILURE";

export const fetchEnrollPassCourseLearnerRequest = (courseId) => ({
    type: FETCH_ENROLL_PASS_COURSE_LEARNER_REQUEST,
    payload: courseId
})

export const fetchEnrollPassCourseLearnerSuccess = (learners) => ({
    type: FETCH_ENROLL_PASS_COURSE_LEARNER_SUCCESS,
    payload: learners
})

export const fetchEnrollPassCourseLearnerFailure = (error) => ({
    type: FETCH_ENROLL_PASS_COURSE_LEARNER_FAILURE,
    payload: error
})