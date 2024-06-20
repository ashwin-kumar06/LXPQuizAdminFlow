import { FETCH_PROFILECOURSES_FAILURE, FETCH_PROFILECOURSES_REQUEST, FETCH_PROFILECOURSES_SUCCESS } from "../../actions/Admin/LearnersViewAction"

const initialState = {
    profileCourses: [],
    loading: false,
    error: null,
}

const ProfileCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILECOURSES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PROFILECOURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                profileCourses: action.payload,
                error: null,
            }
        case FETCH_PROFILECOURSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default ProfileCoursesReducer;