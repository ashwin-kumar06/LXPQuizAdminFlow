
import { UNENROLL_DATA_REQUEST,UNENROLL_DATA_SUCCESS,UNENROLL_DATA_FAILURE } from "../../actions/LearnerAction/UnenrollAction";
 
const initialState={
    loading:false,
    error:null,
};
 
 
const UnEnrollReducer=(state=initialState,action)=>{
    switch (action.type) {
        case UNENROLL_DATA_REQUEST:
            return {
                ...state,
                loading:true,
            };
 
        case UNENROLL_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                userData:action.payload,
 
            };
           
        case UNENROLL_DATA_FAILURE:
            return{
              ...state,
              loading:false,
              error:action.payload,
            };    
        default:
            return state;
    }
};
 
 
export default UnEnrollReducer;