import { FETCH_COURSESCORE_REQUEST, FETCH_COURSESCORE_SUCCESS, FETCH_COURSESCORE_FAILURE } from "../../actions/LearnerAction/CoursebyScoreAction"

const initialstate = {
    credential: [],
    loading: false,
    error: null
}

const CoursebyScoreReducer = (state = initialstate, action) => {

    switch (action.type) {
        case FETCH_COURSESCORE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_COURSESCORE_SUCCESS:
            // console.log("reducer", action.payload)
            return {
                ...state,
                loading: false,
                credential: action.payload
            }

        case FETCH_COURSESCORE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload // Assuming the error is passed in the action's payload
            }


        default:
            return state;
    }
}

export default CoursebyScoreReducer;