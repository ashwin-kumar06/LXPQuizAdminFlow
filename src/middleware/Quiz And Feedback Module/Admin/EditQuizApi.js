import axios from "axios";
// import {
//   EDIT_QUIZ_DETAILS_REQUEST,
//   editQuizDetailsSuccess,
//   editQuizDetailsFailure,
// } from "../actions/EditQuizAction";
import { EDIT_QUIZ_DETAILS_REQUEST, editQuizDetailsSuccess,editQuizDetailsFailure } from "../../../actions/Quiz And Feedback Module/Admin/EditQuizAction";
// const quizId = sessionStorage.getItem("quizId");

// const API_URL = `http://localhost:5199/api/Quiz/${quizId}`;

export const PutQuizDetails =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === EDIT_QUIZ_DETAILS_REQUEST) {
      try {
        const API_URL = `http://localhost:5199/api/Quiz/${action.payload.quizId}`;

        const response = await axios.put(API_URL, action.payload);
        console.log("Quiz edited successful", response.data);
        dispatch(editQuizDetailsSuccess(response.data.data));
      } catch (error) {
        console.error("Error:", error.message);
        dispatch(editQuizDetailsFailure(error.message));
        throw error.message;
      }
    }
    return next(action);
  };
