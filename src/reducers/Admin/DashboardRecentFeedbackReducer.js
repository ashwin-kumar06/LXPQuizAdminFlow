import { FETCH_RECENTFEEDBACKRESPONSE_REQUEST,FETCH_RECENTFEEDBACKRESPONSE_SUCCESS,FETCH_RECENTFEEDBACKRESPONSE_FAILURE } from "../../actions/Admin/AdminDashboardAction";

const initialstate={
    recentfeedbackresponse:[],
    loading:false,
    error:null,
};

const DashboardRecentFeedbackReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_RECENTFEEDBACKRESPONSE_REQUEST:
            return{
            ...state,
            loading:true,
            };
    case FETCH_RECENTFEEDBACKRESPONSE_SUCCESS:
        return{
            ...state,
            loading:false,
            recentfeedbackresponse:action.payload,
            error:null,
        };
    case FETCH_RECENTFEEDBACKRESPONSE_FAILURE:
        return{
        ...state,
        loading:false,
        error:action.payload,
        };
    default:
        return state;
    }
};
export default DashboardRecentFeedbackReducer;

