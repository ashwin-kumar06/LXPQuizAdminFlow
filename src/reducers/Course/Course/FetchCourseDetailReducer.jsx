import { FETCH_COURSE_REQUEST,FETCH_COURSE_SUCCESS,FETCH_COURSE_FAILURE } from "../../../actions/Course/Course/FetchCouseDetailsAction";
  
  const initialState = {
    
    courses: [],
    loading: false,
    error: null,
    isNavigate:false,
    
  };
  
  const fetchCourseReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case FETCH_COURSE_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_COURSE_SUCCESS:
        console.log("coursedetailreducer",action.payload);
        return{
          ...state,
          courses:action.payload,
          loading:false,
          isNavigate:true,
    
        };
      case FETCH_COURSE_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
          isNavigate:false,
    
        };
        
      default:
        return state;
    }
  };
  
  export default fetchCourseReducer;
  