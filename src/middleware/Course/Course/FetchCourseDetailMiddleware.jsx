import { FETCH_COURSE_REQUEST,fetchCourseSuccess,fetchCourseFailure } from "../../../actions/Course/Course/FetchCouseDetailsAction";
import axios from "axios";

const API_URL='http://localhost:5199/lxp/course';

const fetchcourseApi = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type === FETCH_COURSE_REQUEST) {
    try {
        console.log("action",action.payload);
      const response = await axios.get(`http://localhost:5199/lxp/course/${action.payload}`);
      console.log('API Response course:', response.data.data); // Log the response data
      
        dispatch(fetchCourseSuccess(response.data.data));
        // console.log("categorymiddleware",response.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchCourseFailure(error.message));
    }
  }
  return next(action)
};
export default fetchcourseApi;