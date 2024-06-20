import axios from "axios";
import {
  UPDATE_QUIZFEEDBACK_REQUEST,
  updatequizfeedbackSuccess,
  updatequizfeedbackFailure,
} from "../../../actions/Quiz And Feedback Module/Admin/UpdateQuizFeedbackAction";

export const UpdateQuizFeedbackApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type == UPDATE_QUIZFEEDBACK_REQUEST) {
      try {
        console.log("put act", action.payload);
        const API_URL = `http://localhost:5199/api/QuizFeedback/UpdateFeedbackQuestion/${action.payload.quizquestionfeedbackid}`; // Assuming 'action.payload' contains the data you want to send
        const response = await axios.put(API_URL, action.payload.formData);
        console.log("feed quiz Put API Response:", response.data); // Log the response data
        dispatch(updatequizfeedbackSuccess(response.data.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(updatequizfeedbackFailure(error.message));
      }
    }
    return next(action);
  };

export default UpdateQuizFeedbackApi;
