import axios from "axios";
import { FETCH_CONTENT_REQUEST,fetchContentSuccess,fetchContentFailure } from "../../../actions/Course/Material/FetchContentAction";
const API_URL = 'http://localhost:5199/lxp/course/topic/';
 
const fetchContentApi = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type === FETCH_CONTENT_REQUEST) {
    try {
      // console.log("x"+action.payload.topicId);
      // console.log(`http://localhost:5199/lxp/course/topic/${action.payload.topicId}/materialtype/${action.payload.materialTypeId}`);
      const response= await axios.get(`http://localhost:5199/lxp/course/topic/${action.payload.topicId}/materialtype/${action.payload.materialTypeId}`);
      // console.log('API Response for fetch:', response.data); // Log the response data
      console.log("karni",response.data);
      await dispatch(fetchContentSuccess(response.data));
      
    } catch (error) {
      console.error('API Error:', error.message);
      await dispatch(fetchContentFailure(error.message));
    }
  }
  return next(action)
};
export default fetchContentApi;
