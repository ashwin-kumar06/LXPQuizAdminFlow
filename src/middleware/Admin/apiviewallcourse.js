import axios from 'axios';
import {
  FETCH_ALL_COURSES_REQUEST,
  fetchallCoursesSuccess,
  fetchallCoursesFailure,
} from '../../actions/Admin/Adnimviewcourse';
 
const API_URL = 'http://localhost:5199/api/Course/lxp/GetAllCourse';
 
const apiviewallcourse = ({ dispatch }) => (next) => async (action) => {
  next(action);
 
  if (action.type === FETCH_ALL_COURSES_REQUEST) {
    try {
      const response = await axios.get(API_URL);
 
      console.log('API Response:', response.data);
 
 
      if (response.status === 200 && response.data && response.data.data.length > 0) {
 
        const coursesWithBlobs = await Promise.all(response.data.data.map(async (course) => {
          try {
            // Fetch the image as a blob
 
            const responseUrl = await axios.get(course.thumbnailimage, { responseType: 'blob' });
 
            // Create a blob from the response data
 
 
            const blob = new Blob([responseUrl.data], { type: responseUrl.data.type });
 
            console.log("checktheblobtype", blob);
            // Extract the image name from the URL
 
            const imageName = course.thumbnailimage.split('/').pop();
 
 
            console.log("checktheimagename", imageName);
            // Create a file from the blob
 
            const file = new File([blob], imageName, { type: blob.type, lastModified: Date.now() });
 
            // Return the updated course object
 
            return { ...course, thumbnailimage: file };
 
          }
          catch (imageError) {
            console.error('Error converting image to blob:', imageError);
            // Return the course object with a null thumbnailimage on error
            return { ...course, thumbnailimage: null };
          }
        }));
 
        dispatch(fetchallCoursesSuccess(coursesWithBlobs));
      } else {
        console.error('No data received from API');
        dispatch(fetchallCoursesFailure('No data received from API'));
      }
 
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchallCoursesFailure(error.message));
    }
  }
};
 
export default apiviewallcourse;