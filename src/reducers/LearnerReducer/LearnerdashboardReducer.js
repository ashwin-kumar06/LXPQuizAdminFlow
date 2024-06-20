import { FETCH_DASHBOARD_REQUEST, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILURE } from "../../actions/LearnerAction/LearnerdashboardAction";

const initialState = {
    dashboard: [],
    loading: false,
    error: null,
};

const LearnerdashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DASHBOARD_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                dashboard: action.payload,
            };

        case FETCH_DASHBOARD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default LearnerdashboardReducer;