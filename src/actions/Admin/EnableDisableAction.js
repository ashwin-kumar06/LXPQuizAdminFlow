export const ENABLE_DISABLE_COURSE_REQUEST = "ENABLE_DISABLE_COURSE_REQUEST";
export const ENABLE_DISABLE_COURSE_SUCCESS = "ENABLE_DISABLE_COURSE_SUCCESS";
export const ENABLE_DISABLE_COURSE_FAILURE = "ENABLE_DISABLE_COURSE_FAILURE";

export const enableDisableCourseRequest = (courseId, isAvailable) => ({
    type: ENABLE_DISABLE_COURSE_REQUEST,
    payload: { courseId, isAvailable }
})
export const enableDisableCourseSuccess = (data) => ({
    type: ENABLE_DISABLE_COURSE_SUCCESS,
    payload: data
})
export const enableDisableCourseFailure = (error) => ({
    type: ENABLE_DISABLE_COURSE_SUCCESS,
    payload: error
}) 