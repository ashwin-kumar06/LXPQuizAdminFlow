import { 
   
    FETCH_TOPICS_REQUEST,
    FETCH_TOPICS_SUCCESS,
    FETCH_TOPICS_FAILURE,
  } from '../../../actions/Course/Topic/FetchTopicsAction';
  
  const initialState = {
    
    topics: [],
    loading: false,
    error: null,
    
  };
  
  const fetchTopicsReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
      case FETCH_TOPICS_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_TOPICS_SUCCESS:
        console.log("Topicsreducer",action.payload);
        return{
          ...state,
          topics:action.payload,
         
          loading:false,
          error:null,
        };
      case FETCH_TOPICS_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchTopicsReducer;