import axios from "axios";
import {
    topicfeedbackresponseSuccess,
    topicfeedbackresponseFailure,
    topicfeedbackresponserequest,
    TOPICFEEDBACKRESPONSE_SUCCESS,
    TOPICFEEDBACKRESPONSE_REQUEST,
  } from "../../../actions/Quiz And Feedback Module/Learner/TopicFeedbackResponseAction.js";
 
const API_URL = "http://localhost:5199/api/FeedbackResponse/AddTopicFeedbackResponses";
 
export const TopicFeedbackResponseApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === TOPICFEEDBACKRESPONSE_REQUEST) {
      try {
        console.log("post", action.payload);
        // Assuming 'action.payload' contains the data you want to senda
        const response = await axios.post(API_URL, action.payload);
        console.log("API Response:", response.data); // Log the response data
        dispatch(topicfeedbackresponseSuccess(response.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(topicfeedbackresponseFailure(error.message));
      }
    }
    return next(action);
  };
 