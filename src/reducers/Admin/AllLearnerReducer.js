import { FETCH_LEARNERS_FAILURE, FETCH_LEARNERS_REQUEST, FETCH_LEARNERS_SUCCESS } from "../../actions/Admin/LearnersViewAction"

const initialState = {
    learners: [],
    loading: false,
    error: null,
}

const AllLearnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEARNERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LEARNERS_SUCCESS:
            console.log("alllearner",action.payload);
            return {
                ...state,
                loading: false,
                learners: action.payload,
                error: null,
            }
        case FETCH_LEARNERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};
export default AllLearnerReducer;