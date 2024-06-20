import axios from "axios";
import {  FETCH_CONTENT_URL_REQUEST,fetchContentUrlSuccess,fetchContentUrlFailure } from "../../../actions/Course/Material/FetchContentUrlAction";
//const API_URL = 'http://localhost:5199/lxp/course/';
 
const fetchContentUrlApi = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type ===  FETCH_CONTENT_URL_REQUEST) {
    try {
      // const source = axios.CancelToken.source();
      if(!action.payload.isContentUrl){
        const response = await axios.get(`http://localhost:5199/lxp/course/material/${action.payload}`)
        // const response = await axios.get(`http://localhost:5199/lxp/course/material/${action.payload}`,{ cancelToken: source.token })
      
        console.log('API Response fetchcontenturlapi:', response.data); // Log the response data
        if(response.status==200){
         dispatch(fetchContentUrlSuccess(response.data.data));
         
// source.cancel();



 
        }
         console.log("mytopicmiddleware_fetchcontenturlapi",response.data.data)
       
      }
     
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchContentUrlFailure(error.message));
    }
  }
  return next(action)
};
export default fetchContentUrlApi;