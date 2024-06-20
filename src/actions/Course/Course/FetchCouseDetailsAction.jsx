export const FETCH_COURSE_REQUEST='FETCH_COURSE_REQUEST';
export const FETCH_COURSE_SUCCESS='FETCH_COURSE_SUCCESS';
export const FETCH_COURSE_FAILURE='FETCH_COURSE_FAILURE';

export const fetchCourseRequest=(courseId)=>({
    type:FETCH_COURSE_REQUEST,
    payload:courseId,
})

export const fetchCourseSuccess=(course)=>({
    type:FETCH_COURSE_SUCCESS,
    payload:course,
})

export const fetchCourseFailure=(error)=>({
    type:FETCH_COURSE_FAILURE,
    payload:error,
})