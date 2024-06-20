import axios from "axios";
import { FETCH_MATERIALTYPE_REQUEST,fetchMaterialTypeSuccess,fetchMaterialTypeFailure } from "../../../actions/Course/Material/FetchMaterialTypeAction";
const API_URL = 'http://localhost:5199/lxp/course/materialtype';
 
const fetchMaterialTypeApi = ({ dispatch }) => (next) => async (action) => {
  
 
  if (action.type === FETCH_MATERIALTYPE_REQUEST) {
    try {
      const response = await axios.get(API_URL);
      console.log('API Response:', response.data); // Log the response data
      
        dispatch(fetchMaterialTypeSuccess(response.data.data));
        // console.log("MaterialTypemiddleware",response.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchMaterialTypeFailure(error.message));
    }
  }
  return next(action)
};
export default fetchMaterialTypeApi;
