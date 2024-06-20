import { 
   
    FETCH_CONTENT_URL_REQUEST,
    FETCH_CONTENT_URL_SUCCESS,
    FETCH_CONTENT_URL_FAILURE,
    SET_CONTENT_URL_STATUS,
  } from '../../../actions/Course/Material/FetchContentUrlAction';
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    isContentUrl:false,

    
  };
  
  const fetchContentUrlReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case FETCH_CONTENT_URL_REQUEST:
        return{
          ...state,
          loading:true,
          isContentUrl:false,

        };
  
      case FETCH_CONTENT_URL_SUCCESS:
        
        // console.log("contentreducer1",action.payload);  

        return{
          ...state,
          content:action.payload,
          isContentUrl:false,

          loading:false,
        };
      case FETCH_CONTENT_URL_FAILURE:
        return{
          ...state,
          content:[],
          loading:false,
          isContentUrl:false,
          error:action.payload,
        };
      case SET_CONTENT_URL_STATUS:
        return{
          ...state,
         
          loading:false,
          isContentUrl:true,
          
        }
      default:
        return state;
    }
  };
  
  export default fetchContentUrlReducer;
  