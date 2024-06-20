import { 
   
    FETCH_EDIT_TOPICS_REQUEST,
    FETCH_EDIT_TOPICS_SUCCESS,
    FETCH_EDIT_TOPICS_FAILURE,
  } from '../../../actions/Course/Topic/FetchEditTopicRequest';
  
  const initialState = {
    
    topics: [],
    loading: false,
    error: null,
    
  };
  
  const fetchEditTopicsReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
      case FETCH_EDIT_TOPICS_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_EDIT_TOPICS_SUCCESS:
        console.log("Editreducer",action.payload);
        return{
          ...state,
          topics:action.payload,
         
          loading:false,
          error:null,
        };
      case FETCH_EDIT_TOPICS_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchEditTopicsReducer;