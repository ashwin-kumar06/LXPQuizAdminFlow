import { LOGIN_REQUEST, loginSuccessadmin, loginSuccessuser, loginError,loginPasswordMessage,loginEmaildMessage } from '../../actions/Admin/loginAction';
 
import axios from "axios";
 
 import { baseUrl } from "./api";
 
 
const loginUser = ({ dispatch }) => (next) => async (action) => {
 
  if (action.type === LOGIN_REQUEST) {
    try {
      const response = await axios.post(`${baseUrl}/api/Login/LoginLearner`, action.payload);  // email and password
 
      console.log('API Response:', response.data); // Log the response data
 
      if (response.data.email === true && response.data.password === true && response.data.role === "Admin") {
        console.log("Admin", response.data)
 
     
        const adminId = response.data.getLearnerId;
        // Store user ID in session
        sessionStorage.setItem('AdmminSessionId', adminId);
        sessionStorage.setItem('Role',response.data.role);
         
 
        dispatch(loginSuccessadmin(response.data));
      }
 
      else if(response.data.email===true && response.data.password===false)
      {
 
        console.log("password is wrong")
 
        dispatch(loginPasswordMessage(response.data));
      }
      else if (response.data.email === true && response.data.password === true && response.data.role === "Learner") {
        console.log("user", response.data)
       
 
        const learnerId = response.data.getLearnerId;
        // Store user ID in session
        sessionStorage.setItem('UserSessionID', learnerId);
 
        dispatch(loginSuccessuser(response.data))
      }
 
      else if(response.data.email !==true && response.data.password===false)
      {
        dispatch(loginEmaildMessage(response.data))
      }
      else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(loginError(error.message));
    }
  }
  return next(action)
};
 
 
export default loginUser;
 