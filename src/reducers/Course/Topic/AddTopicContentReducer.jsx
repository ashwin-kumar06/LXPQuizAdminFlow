import { CREATE_TOPIC_REQUEST,CREATE_TOPIC_SUCCESS,CREATE_TOPIC_FAILURE } from "../../action/Course/TopicContentAction";
  
  const initialState = {
    
    topic: [],
    loading: false,
    error: null,
    isSuccess:false,
    
    
  };
  
  const AddTopicContentReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case CREATE_TOPIC_REQUEST:
       
        return{
       ...state,
       topic:[...state.topic],
          loading:true,
          isSuccess:false,
          
        };
        case CREATE_TOPIC_SUCCESS:
        console.log("addtopic success",action.payload)
        return{
          ...state,
          topic:[...state.topic,action.payload],
          loading:false,
          isSuccess:true,
        };
        case CREATE_TOPIC_FAILURE:
       
        return{
        //   ...state,
        //   courses:[...state.courses,action.payload],
          loading:false,
          error:action.payload,
        };
  
      
      default:
        return state;
    }
  };
  
  export default AddTopicContentReducer;
  