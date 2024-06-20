import { FETCH_LAST_ENROLLED_COURSE_FAILURE, FETCH_LAST_ENROLLED_COURSE_REQUEST, FETCH_LAST_ENROLLED_COURSE_SUCCESS } from "../../actions/Admin/LearnersViewAction";

const initialState = {
    lastenrolledCourse: [],
    loading: false,
    error: null,
}

const LastEnrolledCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LAST_ENROLLED_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_LAST_ENROLLED_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                lastenrolledCourse: action.payload,
                error: null,
            }
        case FETCH_LAST_ENROLLED_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default LastEnrolledCourseReducer;