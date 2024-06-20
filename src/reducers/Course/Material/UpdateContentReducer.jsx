import { 
   
    UPDATE_CONTENT_REQUEST,
    UPDATE_CONTENT_SUCCESS,
    UPDATE_CONTENT_FAILURE,
    UPDATE_CONTENT_EXISTS,
  } from '../../../actions/Course/Material/UpdateContentAction';
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    isExists:false,
    
  };
  
  const updateContentReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
      case UPDATE_CONTENT_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case UPDATE_CONTENT_SUCCESS:
        console.log("updatereducer",action.payload);
        return{
          ...state,
          content:action.payload,
         
          loading:false,
          error:null,
        };
      case UPDATE_CONTENT_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
      case UPDATE_CONTENT_EXISTS:
        console.log("exists reducer",action.payload);
          return{
            ...state,
            content: [],
            loading: false,
             error: null,
             isExists:true,
          };  
        
      default:
        return state;
    }
  };
  
  export default updateContentReducer;