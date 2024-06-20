import React from "react";

import axios from "axios";
import {
  DELETE_TOPICFEEDBACK_REQUEST,
  deletetopicfeedbackSuccess,
  deletetopicfeedbackFailure,
} from "../../../actions/Quiz And Feedback Module/Admin/DeleteTopicFeedbackAction";

export const DeleteTopicFeedbackApi = async (action) => {
      try {
        const API_URL = `http://localhost:5199/api/TopicFeedback/${action}`;
        console.log("delete topic feedback", action);
        // Assuming 'action.payload' contains the data you want to senda
        const response = await axios.delete(API_URL);
        console.log("Delete topic feedback API Response:", response.data); // Log the response data
      } catch (error) {
        console.error("API Error:", error.message);
      }

  };

export default DeleteTopicFeedbackApi;
