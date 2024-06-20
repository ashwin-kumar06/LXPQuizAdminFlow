import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CREATE_COURSES_REQUEST, createCoursesSuccess, createCoursesFailure, createcontent, createCoursesExists, SET_COURSE_STATUS } from '../../../actions/Course/Course/AddCourseAction'



const API_URL = 'http://localhost:5199/lxp/course';

const addCourse = ({ dispatch, getState }) => (next) => async (action) => {


  if (action.type === CREATE_COURSES_REQUEST) {
    const ReducerData = getState().addcourse;

    if (!ReducerData.isRequesting) {
      dispatch({ type: SET_COURSE_STATUS, payload: true });
      try {
        debugger
        console.log("post", action.payload)
        // Assuming 'action.payload' contains the data you want to senda
        const response = await axios.post(API_URL, action.payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('API Response:', response.data); // Log the response data

        console.log("aaa", response.data.data.courseId)


        if (response.data.statusCode == 412) {
          dispatch(createCoursesExists());
        }
        else {
          dispatch(createCoursesSuccess(response.data.data.courseId));// Dispatch success action with the response data
        }

      } catch (error) {
        console.error('API Error:', error.message);
        dispatch(createCoursesFailure(error.message));
      } finally {
        dispatch({ type: SET_COURSE_STATUS, payload: false })
      }
    }
  }
  return next(action);

};

export default addCourse;

// Thunk Middleware
// export const addCourse = (formData) => async (dispatch) => {
//   dispatch(createCoursesRequest(formData));
//   try {
//     // Replace with your API call
//     const response = await axios.post('http://localhost:5199/lxp/course', formData);
//     dispatch(createCoursesSuccess());
//     // You can also pass response data if needed
//   } catch (error) {
//     dispatch(createCoursesFailure(error));
//   }
// };
// export const addCourse = (formData) => async (dispatch) => {
//   dispatch(createCoursesRequest(formData));
//   try {
//     const response = await axios.post('http://localhost:5199/lxp/course', formData);
//     // Dispatch the success action with the response data
//     dispatch(createCoursesSuccess(response.data));
//   } catch (error) {
//     // Dispatch the failure action with the error
//     dispatch(createCoursesFailure(error));
//   }
// };