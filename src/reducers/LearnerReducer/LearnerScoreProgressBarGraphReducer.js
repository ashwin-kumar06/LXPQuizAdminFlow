import {
    FETCH_COURSES_TOPICS_SCORES_REQUEST,
    FETCH_COURSES_TOPICS_SCORES_SUCCESS,
    FETCH_COURSES_TOPICS_SCORES_FAILURE
} from "../../actions/LearnerAction/LearnerScoreProgressBarGraphAction";

const initialState = {
    scoreProgress: [],
    loading: false,
    error: null,
};


const LearnerScoreProgressBarGraphReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES_TOPICS_SCORES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COURSES_TOPICS_SCORES_SUCCESS:
            console.log("Success", action.payload);
            return {
                ...state,
                loading: false,
                scoreProgress: action.payload,
                error: null,
            };

        case FETCH_COURSES_TOPICS_SCORES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default LearnerScoreProgressBarGraphReducer;