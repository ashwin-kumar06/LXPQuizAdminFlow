import { FETCH_LEARNER_PROGRESS_REQUEST, FETCH_LEARNER_PROGRESS_SUCCESS, FETCH_LEARNER_PROGRESS_FAILURE } from "../../actions/LearnerAction/FetchLearnerProgressAction";

const initialState = {
    learnerprogress: [],
    loading: false,
    error: null,
}

const LearnerProgressReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEARNER_PROGRESS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_LEARNER_PROGRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                learnerprogress: action.payload,
            };

        case FETCH_LEARNER_PROGRESS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default LearnerProgressReducer;