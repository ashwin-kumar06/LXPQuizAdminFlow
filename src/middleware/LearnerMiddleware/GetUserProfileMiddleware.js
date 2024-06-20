
import axios from "axios";
import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_FAILURE, // Corrected typo here
  getUserProfileFailure,
} from "../../actions/LearnerAction/GetUpdateUserProfileAction";

import { getUserProfileSuccess } from "../../actions/LearnerAction/GetUpdateUserProfileAction";





export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${userId}`);
    console.log("ses", response.data.data);
    sessionStorage.setItem("Learnerdatails", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error; // Added to re-throw the error after logging
  }
};

// Removed default export here










export const fetchProfileData = ({ dispatch }) => (next) => async (action) => {
  if (action.type === GET_USER_PROFILE_REQUEST) {
    try {
      console.log("learner id", action.payload);
      const response = await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${action.payload}`);

      console.log("response", response);

      if (response.data.statusCode === 200) {

        dispatch(getUserProfileSuccess(response));

      } else {
        console.error("No data received from API");
        dispatch(getUserProfileFailure()); // Assuming you want to dispatch without error data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(getUserProfileFailure(error));
    }
  }
  return next(action);
};

// Removed default export here

// export { fetchUserData, fetchProfileData }; // Exporting as named exports



