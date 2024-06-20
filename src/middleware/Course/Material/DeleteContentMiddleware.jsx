import axios from 'axios';
import { DELETE_CONTENT_REQUEST,deleteContentSuccess,deleteContentFailure } from '../../../actions/Course/Material/DeleteContentAction'



//const API_URL = 'http://localhost:5199/lxp/course/topic/';

 const deleteContentApi = ({ dispatch }) => (next) => async (action) => {
  

  if (action.type === DELETE_CONTENT_REQUEST) {
    try {
        
      console.log("content delete api",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      console.log(`http://localhost:5199/lxp/course/material/${action.payload}`)
      const response = await axios.delete(`http://localhost:5199/lxp/course/material/${action.payload}`);
      console.log('API Response:', response.data); // Log the response data
      dispatch(deleteContentSuccess(response.data));
           
      
    } catch (error) {

      console.error('API Error:', error.message);
      dispatch(deleteContentFailure(error.message));
      
    }
  }
  return next(action);
  
};

export default deleteContentApi;
