import axios from "axios";
import { quizfeedbackresponserequest,quizfeedbackresponseSuccess,quizfeedbackresponseFailure,QUIZFEEDBACKRESPONSE_REQUEST,QUIZFEEDBACKRESPONSE_SUCCESS,QUIZFEEDBACKRESPONSE_FAILURE } from "../../../actions/Quiz And Feedback Module/Learner/QuizFeedbackResponseAction"
 
const API_URL = "http://localhost:5199/api/FeedbackResponse/AddQuizFeedbackResponses";
 
export const QuizFeedbackResponseApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === QUIZFEEDBACKRESPONSE_REQUEST) {
      try {
        console.log("post", action.payload);
        // Assuming 'action.payload' contains the data you want to senda
        const response = await axios.post(API_URL, action.payload);
        console.log("API Response:", response.data); // Log the response data
        dispatch(quizfeedbackresponseSuccess(response.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(quizfeedbackresponseFailure(error.message));
      }
    }
    return next(action);
  };