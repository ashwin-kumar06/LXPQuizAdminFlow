import { FETCH_ENROLL_COURSE_LEARNER_FAILURE, FETCH_ENROLL_COURSE_LEARNER_REQUEST, FETCH_ENROLL_COURSE_LEARNER_SUCCESS } from "../../actions/Admin/EnrollmentCourseLearners"

const initialState = {
    learners: [],
    loading: false,
    error: null
}

const EnrollCourseLearner = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENROLL_COURSE_LEARNER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ENROLL_COURSE_LEARNER_SUCCESS:
            return {
                ...state,
                loading: false,
                learners: action.payload,
                error: null
            }
        case FETCH_ENROLL_COURSE_LEARNER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};
export default EnrollCourseLearner;