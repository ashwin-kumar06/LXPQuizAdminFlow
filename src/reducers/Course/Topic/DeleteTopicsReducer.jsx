import { 
   
    DELETE_TOPICS_REQUEST,
    DELETE_TOPICS_SUCCESS,
    DELETE_TOPICS_FAILURE,
  } from '../../../actions/Course/Topic/DeleteTopicsAction';
  
  const initialState = {
    
    topics: [],
    loading: false,
    error: null,
    
  };
  
  const deleteTopicsReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
      case DELETE_TOPICS_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case DELETE_TOPICS_SUCCESS:
        console.log("TopicsDeletereducer",action.payload);
        return{
          ...state,
         // topics:action.payload,
          topics:state.topics.filter(topic=>topic.topicId !== action.payload),
          loading:false,
          error:null,
        };
      case DELETE_TOPICS_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default deleteTopicsReducer;