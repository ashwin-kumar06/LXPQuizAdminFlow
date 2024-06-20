import React from "react";
import axios from "axios";
import {
  DELETE_QUIZFEEDBACK_REQUEST,
  deletequizfeedbackSuccess,
  deletequizfeedbackFailure,
} from "../../../actions/Quiz And Feedback Module/Admin/DeleteQuizFeedbcakAction";

export const DeleteQuizFeedbackApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type == DELETE_QUIZFEEDBACK_REQUEST) {
      try {
        const API_URL = `http://localhost:5199/api/QuizFeedback/DeleteFeedbackQuestion/${action.payload}`;
        console.log("delete quiz", action.payload);
        // Assuming 'action.payload' contains the data you want to senda
        const response = await axios.delete(API_URL);
        console.log("feed Delete API Response:", response.data); // Log the response data
        dispatch(deletequizfeedbackSuccess(response.data)); // Dispatch success action with the response data
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(deletequizfeedbackFailure(error.message));
      }
    }
    return next(action);
  };

export default DeleteQuizFeedbackApi;
