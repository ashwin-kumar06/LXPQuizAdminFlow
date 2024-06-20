import axios from "axios";
import { FETCH_INDIVIDUAL_CONTENT_REQUEST,fetchIndividualContentSuccess,fetchIndividualContentFailure } from "../../../actions/Course/Material/FetchIndividualContentByIdAction";

 
const fetchIndividualContentApi = ({ dispatch }) => (next) => async (action) => {
  if (action.type === FETCH_INDIVIDUAL_CONTENT_REQUEST ) {
    try {
      console.log("INDIVIDUALCONTENT",action.payload);
      const response = await axios.get(`http://localhost:5199/lxp/course/material/withoutpdfconversion/${action.payload}`)
      // console.log(`http://localhost:5199/lxp/course/topic/${action.payload}`)
      console.log('Fetch  Response:', response.data); // Log the response data
      const responseurl=await axios.get(response.data.data.filePath, { responseType: 'blob' })
    // .then((response) => {
      // Create a Blob from the response
     const blob = new Blob([responseurl.data], { type: responseurl.data.type });
      var materialname=response.data.data.filePath.split("/");
      var file = new File([blob], `${materialname[materialname.length-1]}`, { type: blob.type, lastModified: Date.now() })
      // Dispatch the action with the Blob
      // dispatch(fetchContentUrlSuccess(file));
      response.data.data.filePath=file;
      console.log("FetchMiddleware",response.data.data)

        dispatch(fetchIndividualContentSuccess(response.data.data));
        console.log("FetchMiddleware",response.data.data)
      
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchIndividualContentFailure(error.message));
    }
  }
  return next(action)
};
export default fetchIndividualContentApi;