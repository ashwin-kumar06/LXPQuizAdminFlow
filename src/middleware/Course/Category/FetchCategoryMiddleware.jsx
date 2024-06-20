import axios from "axios";
import { FETCH_CATEGORY_REQUEST,fetchCategorySuccess,fetchCategoryFailure } from "../../../actions/Course/Course/AddCourseAction";
const API_URL = 'http://localhost:5199/lxp/course/category';
 
const fetchcategoryApi = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type === FETCH_CATEGORY_REQUEST) {
    try {
      const response = await axios.get(API_URL);
      console.log('API Response:', response.data); // Log the response data
      
        dispatch(fetchCategorySuccess(response.data.data));
        // console.log("categorymiddleware",response.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchCategoryFailure(error.message));
    }
  }
  return next(action)
};
export default fetchcategoryApi;
