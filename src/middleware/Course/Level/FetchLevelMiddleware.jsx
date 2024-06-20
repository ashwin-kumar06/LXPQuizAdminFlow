import axios from "axios";
import { FETCH_LEVEL_REQUEST,fetchLevelSuccess,fetchLevelFailure } from "../../../actions/Course/Course/AddCourseAction";
const API_URL = 'http://localhost:5199/lxp/course/courselevel/ash';
 
const fetchlevelApi = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type === FETCH_LEVEL_REQUEST) {
    try {
      const response = await axios.get(API_URL);
      console.log('API Response:', response.data); // Log the response data
      
        dispatch(fetchLevelSuccess(response.data.data));
        // console.log("levelmiddleware",response.data);
       
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchLevelFailure(error.message));
    }
  }
  return next(action)
};
export default fetchlevelApi;
