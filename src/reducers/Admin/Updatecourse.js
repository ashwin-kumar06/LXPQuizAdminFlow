// import { UPDATE_COURSES_REQUEST,UPDATE_COURSES_SUCCESS,UPDATE_COURSES_FAILURE } from "../../actions/Admin/Updatecourse";


// const initialState = {
  
//     courses: [],
//     loading: false,
//     error: null,
//     isSubmitted:false,
//   };
  
//   const courseupdateReducer = (state = initialState, action) => {
//     switch (action.type) {
//        case UPDATE_COURSES_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case UPDATE_COURSES_SUCCESS:
//         console.log('Course posted:', action.payload);
//         // Add the new course to the existing courses array
//         return {
//           ...state,
//           loading: false,
//           courses: [...state.courses, action.payload],
//           isSubmitted:true,
//           error: null,
//         };
//       case UPDATE_COURSES_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default courseupdateReducer;

import { UPDATE_COURSES_REQUEST, UPDATE_COURSES_SUCCESS, UPDATE_COURSES_FAILURE } from "../../actions/Admin/Updatecourse";

const initialState = {
  courses: [],
  loading: false,
  error: null,
  message:null,
  isUpdated: false

};

const courseupdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case UPDATE_COURSES_SUCCESS:
        const updatedCourses = state.courses.map((course) =>
          course.courseId === action.payload.courseId ? { ...course, ...action.payload } : course
        );
        console.log("updatereducer",action.payload);
      return {
        ...state,
        loading: false,
        courses: updatedCourses,
        message:action.payload,
        isUpdated: true, // This should match the initialState property name
        error: null,
      };
    case UPDATE_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        isUpdated: false, // This should match the initialState property name
        error: action.payload,
      };
    default:
      return state;
  }
};

export default courseupdateReducer;
