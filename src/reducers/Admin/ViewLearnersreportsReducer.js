
import { FETCH_LEARNERSREPORT_REQUEST, FETCH_LEARNERSREPORT_SUCCESS, FETCH_LEARNERSREPORT_FAILURE } from "../../actions/Admin/LearnersReportAction";

const initialState = {
    reports: [],
    loading: false,
    error: null,
};

const ViewLearnersreportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEARNERSREPORT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LEARNERSREPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                reports: action.payload,
                error: null,
            };
        case FETCH_LEARNERSREPORT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
             return state;
    }
};

export default ViewLearnersreportsReducer;
