import { 
   
    DELETE_CONTENT_REQUEST,
    DELETE_CONTENT_SUCCESS,
    DELETE_CONTENT_FAILURE,
  } from '../../../actions/Course/Material/DeleteContentAction'
  
  const initialState = {
    
    content: [],
    loading: false,
    error: null,
    
  };
  
  const deleteContentReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
      case DELETE_CONTENT_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case DELETE_CONTENT_SUCCESS:
        console.log("ContentDeletereducer",action.payload);
        return{
          ...state,
         // topics:action.payload,
          content:state.content.filter(content=>content.materialId !== action.payload),
          loading:false,
          error:null,
        };
      case DELETE_CONTENT_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default deleteContentReducer;