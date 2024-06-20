import{EMAIL_REQUEST,EMAIL_SUCCESS,EMAIL_ERROR} from '../../actions/Admin/EmailAction';

const initialState={
    email:null,
    loading:false,
    isSuccessemail:false,
    error:null,
};

const emailReducer=(state = initialState,action)=>{
    switch(action.type){
        case EMAIL_REQUEST:
            return{
            ...state,
            loading:true,
            error:null
        }
        case EMAIL_SUCCESS:
            return{
                ...state,
                email:action.payload,
                isSuccessemail:true,
                loading:false,
                error:null
            }
        case EMAIL_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }

};

export default emailReducer;

// const emailReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SUBMIT_EMAIL:
//             return {
//                 ...state,
//                 email: action.payload.email,
//                 submitting: true, 
//             };
//         default:
//             return state;
//     }
// };
 
// export default emailReducer;
