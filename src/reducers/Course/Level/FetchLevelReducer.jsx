import { 
   
    FETCH_LEVEL_REQUEST,
    FETCH_LEVEL_SUCCESS,
    FETCH_LEVEL_FAILURE,
  } from '../../../actions/Course/Course/AddCourseAction';
  
  const initialState = {
    
    courses: [],
    loading: false,
    error: null,
    
  };
  
  const fetchLevelReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case FETCH_LEVEL_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_LEVEL_SUCCESS:
        console.log("levelreducer",action.payload);
        return{
          ...state,
          courses:action.payload,
          loading:false,
        };
      case FETCH_LEVEL_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchLevelReducer;
  