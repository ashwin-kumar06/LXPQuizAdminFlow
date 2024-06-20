import axios from "axios";
import { FETCH_TOPICS_REQUEST,fetchTopicsSuccess,fetchTopicsFailure } from "../../../actions/Course/Topic/FetchTopicsAction";
//const API_URL = 'http://localhost:5199/lxp/course/';
 
const fetchTopicsApi = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type === FETCH_TOPICS_REQUEST) {
    try {
      const response = await axios.get('http://localhost:5199/lxp/courses/' + action.payload + '/topic', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });  
      console.log('API Response:', response.data); // Log the response data
      
        dispatch(fetchTopicsSuccess(response.data.data));
        console.log("mytopicmiddleware",response.data.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchTopicsFailure(error.message));
    }
  }
  return next(action)
};
export default fetchTopicsApi;