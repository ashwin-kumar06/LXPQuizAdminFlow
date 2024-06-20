import { ENABLE_DISABLE_COURSE_FAILURE, ENABLE_DISABLE_COURSE_REQUEST, ENABLE_DISABLE_COURSE_SUCCESS } from "../../actions/Admin/EnableDisableAction"

const initialState = {
    course: [],
    loading: false,
    error: null
}

const EnableDisableCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_DISABLE_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ENABLE_DISABLE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                course: action.payload,
                error: null,
            }
        case ENABLE_DISABLE_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default EnableDisableCourseReducer;