import { 
   
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE,
  } from '../../../actions/Course/Course/AddCourseAction';
  
  const initialState = {
    
    courses: [],
    loading: false,
    error: null,
    
  };
  
  const fetchCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case FETCH_CATEGORY_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_CATEGORY_SUCCESS:
        console.log("categoryreducer",action.payload);
        return{
          ...state,
          courses:action.payload,
          loading:false,
        };
      case FETCH_CATEGORY_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchCategoryReducer;
  