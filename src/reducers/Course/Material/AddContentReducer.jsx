import { 
    CREATE_CONTENT_REQUEST,
    CREATE_CONTENT_SUCCESS,
    CREATE_CONTENT_FAILURE,
    CREATE_CONTENT_EXISTS,
    SET_CONTENT_STATUS,
    
    
  } from '../../../actions/Course/Material/AddContentAction';
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    isSubmitted:false,
    isExisted:false,
    isRequesting:false,
  };
  
  const AddMaterialReducer = (state = initialState, action) => {
    switch (action.type) {
       case CREATE_CONTENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_CONTENT_SUCCESS:
        console.log('Content posted1:', action.payload);
        
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          content: action.payload,
          isSubmitted:true,
          isExisted:false,
          error: null,
        };
       
      case CREATE_CONTENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          isExisted:true,
        };

        case CREATE_CONTENT_EXISTS:
          return {
            ...state,
            loading: false,
            isExisted:true,
            isSubmitted:false,
            isError:false,
           
            
  
          };
          case SET_CONTENT_STATUS:
            return{
              ...state,
              isRequesting:action.payload,
            }
      
      default:
        return state;
    }
  };
  
  export default AddMaterialReducer;
  