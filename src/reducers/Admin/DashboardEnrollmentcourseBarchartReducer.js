import { FETCH_ENROLLMENTCOURSEBARCHART_REQUEST,FETCH_ENROLLMENTCOURSEBARCHART_SUCCESS,FETCH_ENROLLMENTCOURSEBARCHART_FAILURE } from "../../actions/Admin/AdminDashboardAction";

const initialstate={
    enrollmentcoursebarchart:[],
    loading:false,
    error:null,
};
const DashboardEnrollmentcourseBarchartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_ENROLLMENTCOURSEBARCHART_REQUEST:
            return{
            ...state,
            loading:true,
            };
    case FETCH_ENROLLMENTCOURSEBARCHART_SUCCESS:
        return{
            ...state,
            loading:false,
            enrollmentcoursebarchart:action.payload,
            error:null,
        };
    case FETCH_ENROLLMENTCOURSEBARCHART_FAILURE:
        return{
        ...state,
        loading:false,
        error:action.payload,
        };
    default:
        return state;
    }
};

export default DashboardEnrollmentcourseBarchartReducer;