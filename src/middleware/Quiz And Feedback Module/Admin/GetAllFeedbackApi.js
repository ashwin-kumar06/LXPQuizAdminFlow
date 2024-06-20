import axios from "axios";
// import {
//   FETCH_ALL_QUIZFEEDBACK_REQUEST,
//   fetchallquizfeedbackSuccess,
//   fetchallquizfeedbackFailure,
// } from "../../actions/Quiz And Feedback Module/GetAllQuizFeedbackAction";

// const API_URL = 'http://localhost:5199/api/QuizFeedback/GetAllFeedbackQuestions';

// export const GetAllFeedbackApi =({ dispatch }) =>(next) =>async (action) => {
//     if (action.type === FETCH_ALL_QUIZFEEDBACK_REQUEST) {
//       try {
//         console.log("post", action.payload);
//         const response = await axios.get(
//           `http://localhost:5199/api/QuizFeedback/GetFeedbackQuestionsByQuizId/${action.payload}`
//         );
//         console.log("API Response:", response.data);
//         dispatch(fetchallquizfeedbackSuccess(response.data.data));
//       } catch (error) {
//         console.error("API Error:", error.message);
//         dispatch(fetchallquizfeedbackFailure(error.message));
//       }
//     }
//     return next(action);
//   };

export const GetAllFeedbackApi = async (quizId) => {
    try {
      const response = await axios.get(`http://localhost:5199/api/QuizFeedback/GetFeedbackQuestionsByQuizId/${quizId}`);
      return response.data.data;
    } catch (error) {
      console.error("API Error:", error.message);
    }
  }

