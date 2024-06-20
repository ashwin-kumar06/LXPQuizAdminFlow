import{FETCH_TOPLEARNERS_REQUEST,FETCH_TOPLEARNERS_SUCCESS,FETCH_TOPLEARNERS_FAILURE} from '../../actions/Admin/AdminDashboardAction'
const initialstate={
    toplearners:[],
    loading:false,
    error:null,
};
const DashboardTopLearnersReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_TOPLEARNERS_REQUEST:
            return{
            ...state,
            loading:true,
            };
    case FETCH_TOPLEARNERS_SUCCESS:
        return{
            ...state,
            loading:false,
            toplearners:action.payload,
            error:null,
        };
    case FETCH_TOPLEARNERS_FAILURE:
        return{
        ...state,
        loading:false,
        error:action.payload,
        };
    default:
        return state;
    }
};
export default DashboardTopLearnersReducer;