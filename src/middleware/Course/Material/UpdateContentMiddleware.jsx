import axios from 'axios';
import { UPDATE_CONTENT_REQUEST,updateContentSuccess,updateContentFailure, updateContentExists } from '../../../actions/Course/Material/UpdateContentAction';



const API_URL = 'http://localhost:5199/lxp/course/material';

 const updateContentApi = ({ dispatch }) => (next) => async (action) => {
  

  if (action.type === UPDATE_CONTENT_REQUEST) {
    try {
      console.log("update api",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.put(API_URL,action.payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('update API Response:', response.data.statusCode); // Log the response data
      if(response.data.statusCode==412){
        console.log("existed",response.data);
        dispatch(updateContentExists(response.data)); 
      }
      dispatch(updateContentSuccess(response.data));
     
      
      
    } catch (error) {

      console.error('API Error:', error.message);
      dispatch(updateContentFailure(error.message));
      
    }
  }
  return next(action);
  
};

export default updateContentApi;
