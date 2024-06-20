
import { LOGIN_ERROR,LOGIN_REQUEST,LOGIN_SUCCESS_ADMIN,LOGIN_SUCCESS_USER,LOGIN_PASSWORD_MESSAGE,LOGIN_EMAIL_MESSAGE } from "../../actions/Admin/loginAction";
const initialState = {
    user: null,
    passwordmessage:null,
    failuremessage:false,
    emailmessage:null,
    emailfailuremessage:false,
    loading:false,
    isSuccessadmin:false,
    isSuccessuser:false,
    error: null,
  };
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS_ADMIN:
        console.log("adminreducer",action.payload)
        return {
          ...state,
          isSuccessadmin:true,
          isSuccessuser:false,
          user: action.payload,
          loading:false,
          error: null,
        };
        case LOGIN_SUCCESS_USER:
          console.log("userreducer",action.payload)
          return {
            ...state,
            isSuccessuser:true,
            isSuccessadmin:false,
            user: action.payload,
            loading:false,
          };
        case LOGIN_PASSWORD_MESSAGE:
          console.log("passswoprdmama",action.payload)
          return{
            ...state,
             isSuccessuser:false,
             isSuccessadmin:false,
             passwordmessage:action.payload,
             failuremessage:true,
             loading:false
          }
          case LOGIN_EMAIL_MESSAGE:
            console.log("emailcheckmessage",action.payload)
            return{
              ...state,
               isSuccessuser:false,
               isSuccessadmin:false,
               emailmessage:action.payload,
               emailfailuremessage:true,
               loading:false
            }
        case LOGIN_REQUEST:
            return {
              ...state,
              loading:true,
              error: null,
            };
      case LOGIN_ERROR:
        return {
          ...state,
          loading:false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
 
  export default userReducer;