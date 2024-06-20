import { FETCH_HIGHESTENROLLEDCOURSE_FAILURE,FETCH_HIGHESTENROLLEDCOURSE_SUCCESS,FETCH_HIGHESTENROLLEDCOURSE_REQUEST } from "../../actions/Admin/AdminDashboardAction";

const initialstate={
    highestenrolledcourse:[],
    loading:false,
    error:null,
};

const DashboardHighestEnrolledCourseReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_HIGHESTENROLLEDCOURSE_REQUEST:
            return{
            ...state,
            loading:true,
            };
    case FETCH_HIGHESTENROLLEDCOURSE_SUCCESS:
        return{
            ...state,
            loading:false,
            highestenrolledcourse:action.payload,
            error:null,
        };
    case FETCH_HIGHESTENROLLEDCOURSE_FAILURE:
        return{
        ...state,
        loading:false,
        error:action.payload,
        };
    default:
        return state;
    }
};
export default DashboardHighestEnrolledCourseReducer;