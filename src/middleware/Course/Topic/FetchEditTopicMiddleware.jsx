import axios from "axios";
import { FETCH_EDIT_TOPICS_REQUEST,fetchEditTopicsSuccess,fetchEditTopicsFailure } from "../../../actions/Course/Topic/FetchEditTopicRequest";
//const API_URL = 'http://localhost:5199/lxp/course/';
 
const fetchEditTopicsApi = ({ dispatch }) => (next) => async (action) => {
  // next(action);
 
  if (action.type === FETCH_EDIT_TOPICS_REQUEST) {
    try {
      console.log("TOPICID",action.payload);
      const response = await axios.get(`http://localhost:5199/lxp/course/topic/${action.payload}`)
      console.log(`http://localhost:5199/lxp/course/topic/${action.payload}`)
      console.log('Fetxh  Response:', response.data); // Log the response data
      
        dispatch(fetchEditTopicsSuccess(response.data.data));
        console.log("FetchMiddleware",response.data.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchEditTopicsFailure(error.message));
    }
  }
  return next(action)
};
export default fetchEditTopicsApi;