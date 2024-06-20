export const FETCH_LEARNERS_REQUEST = 'FETCH_LEARNERS_REQUEST';
export const FETCH_LEARNERS_SUCCESS = 'FETCH_LEARNERS_SUCCESS';
export const FETCH_LEARNERS_FAILURE = 'FETCH_LEARNERS_FAILURE';

export const fetchLearnerRequest = () => ({
    type: FETCH_LEARNERS_REQUEST,

});
export const fetchLearnerSuccess = (learners) => ({
    type: FETCH_LEARNERS_SUCCESS,
    payload: learners
});

export const fetchLearnerFailure = (error) => ({
    type: FETCH_LEARNERS_FAILURE,
    payload: error
})


export const FETCH_PROFILECARD_REQUEST = 'FETCH_PROFILECARD_REQUEST';
export const FETCH_PROFILECARD_SUCCESS = 'FETCH_PROFILECARD_SUCCESS';
export const FETCH_PROFILECARD_FAILURE = 'FETCH_PROFILECARD_FAILURE';


export const fetchProfileCardRequest = (payload) => ({
    type: FETCH_PROFILECARD_REQUEST,
    payload: payload
})


export const fetchProfileCardSuccess = (profilecard) => ({
    type: FETCH_PROFILECARD_SUCCESS,
    payload: profilecard
})


export const fetchProfileCardFailure = (error) => ({
    type: FETCH_PROFILECARD_FAILURE,
    payload: error
})

export const FETCH_PROFILECOURSES_REQUEST = 'FETCH_PROFILECOURSES_REQUEST';
export const FETCH_PROFILECOURSES_SUCCESS = 'FETCH_PROFILECOURSES_SUCCESS';
export const FETCH_PROFILECOURSES_FAILURE = 'FETCH_PROFILECOURSES_FAILURE';

export const fetchProfileCoursesRequest = (payload) => ({
    type: FETCH_PROFILECOURSES_REQUEST,
    payload: payload
})


export const fetchProfileCoursesSuccess = (profilecourses) => ({
    type: FETCH_PROFILECOURSES_SUCCESS,
    payload: profilecourses
})


export const fetchProfileCoursesFailure = (error) => ({
    type: FETCH_PROFILECOURSES_FAILURE,
    payload: error
})

export const FETCH_LAST_ENROLLED_COURSE_REQUEST = 'FETCH_LAST_ENROLLED_COURSE_REQUEST';
export const FETCH_LAST_ENROLLED_COURSE_SUCCESS = 'FETCH_LAST_ENROLLED_COURSE_SUCCESS';
export const FETCH_LAST_ENROLLED_COURSE_FAILURE = 'FETCH_LAST_ENROLLED_COURSE_FAILURE';

export const fetchLastEnrolledCourseRequest = (payload) => ({
    type: FETCH_LAST_ENROLLED_COURSE_REQUEST,
    payload: payload
})

export const fetchLastEnrolledCourseSuccess = (enrolledcourse) => ({
    type: FETCH_LAST_ENROLLED_COURSE_SUCCESS,
    payload: enrolledcourse
})

export const fetchLastEnrolledCourseFailure = (error) => ({
    type: FETCH_LAST_ENROLLED_COURSE_FAILURE,
    payload: error
})