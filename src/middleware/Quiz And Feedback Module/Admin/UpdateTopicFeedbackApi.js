import axios from "axios";
import {
  UPDATE_TOPICFEEDBACK_REQUEST,
  updatetopicfeedbackSuccess,
  updatetopicfeedbackFailure,
} from "../../../actions/Quiz And Feedback Module/Admin/UpdateTopicFeedbackAction";

export const UpdateTopicFeedbackApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type == UPDATE_TOPICFEEDBACK_REQUEST) {
      try {
        console.log("put act", action.payload);
        const API_URL = `http://localhost:5199/api/TopicFeedback/${action.payload.topicFeedbackId}`;
        const response = await axios.put(API_URL, action.payload.formData);
        console.log("feed topic Put API Response:", response.data); // Log the response data
        dispatch(updatetopicfeedbackSuccess(response.data.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(updatetopicfeedbackFailure(error.message));
      }
    }
    return next(action);
  };

export default UpdateTopicFeedbackApi;
