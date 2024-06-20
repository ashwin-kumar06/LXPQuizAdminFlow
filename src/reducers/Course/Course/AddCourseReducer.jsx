import {
  CREATE_COURSES_REQUEST,
  CREATE_COURSES_SUCCESS,
  CREATE_COURSES_FAILURE,
  CREATE_CONTENT,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  CREATE_COURSES_EXISTS,
  SET_COURSE_STATUS
} from '../../../actions/Course/Course/AddCourseAction';
 
const initialState = {
  isRequesting:false,
  // course_id:null,
 
};
 
const AddCourseReducer = (state = initialState, action) => {
  switch (action.type) {
     case CREATE_COURSES_REQUEST:
      return {
        ...state,
        // course_id:null,
 
      };
    case CREATE_COURSES_SUCCESS:
      console.log('Coursecaa', action.payload);
      return {
        ...state,
        loading: false,
        course_id: action.payload,
        isSubmitted:true,
        isError:false,
        isExists:false,
        error: null,
      };
     
    case CREATE_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSubmitted:false,
        isExists:false,
        isError:true,
      };
 
      case CREATE_COURSES_EXISTS:
        return {
          ...state,
          loading: false,
          isExists:true,
          isSubmitted:false,
          isError:false,
        };
        case SET_COURSE_STATUS:
          return{
            ...state,
            isRequesting:action.payload,
          };
   
    default:
      return state;
  }
};
 
export default AddCourseReducer;
 