import axios from 'axios';
import { DELETE_TOPICS_REQUEST,deleteTopicsSuccess,deleteTopicsFailure } from '../../../actions/Course/Topic/DeleteTopicsAction';



//const API_URL = 'http://localhost:5199/lxp/course/topic/';

 const deleteTopic = ({ dispatch }) => (next) => async (action) => {
  

  if (action.type === DELETE_TOPICS_REQUEST) {
    try {
        // const confirmDelete = window.confirm("Would you like to delete?");
        // if (confirmDelete) {
      console.log("topic delete api",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.delete(`http://localhost:5199/lxp/course/topic/${action.payload}`);
      console.log('API Response:', response.data); // Log the response data
      dispatch(deleteTopicsSuccess(response.data));
        //}   
      
    } catch (error) {

      console.error('API Error:', error.message);
      dispatch(deleteTopicsFailure(error.message));
      
    }
  }
  return next(action);
  
};

export default deleteTopic;
