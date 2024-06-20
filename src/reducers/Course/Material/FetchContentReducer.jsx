import { 
   
    FETCH_CONTENT_REQUEST,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_FAILURE,
  } from '../../../actions/Course/Material/FetchContentAction';
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    
  };
  
  const fetchContentReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case FETCH_CONTENT_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_CONTENT_SUCCESS:
        
      console.log("contentreducer1",action.payload);  

        return{
          ...state,
          content:action.payload,
          loading:false,
        };
      case FETCH_CONTENT_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchContentReducer;
  