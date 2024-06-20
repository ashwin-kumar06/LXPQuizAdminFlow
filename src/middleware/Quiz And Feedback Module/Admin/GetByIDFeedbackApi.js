import axios from "axios";
// import {
//   FETCH_QUIZFEEDBACK_REQUEST,
//   fetchquizfeedbackSuccess,
//   fetchquizfeedbackFailure,
// } from "../../actions/Quiz And Feedback Module/GetByIDFeedbackAction";
const API_URL =
  "http://localhost:5199/api/QuizFeedback/GetFeedbackQuestionById";

// export const GetByIDFeedbackApi =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type == FETCH_QUIZFEEDBACK_REQUEST) {
//       try {
//         console.log("fetch quiz feedback", action.payload);
//         // Assuming 'action.payload' contains the data you want to senda
//         const url = `${API_URL}/${action.payload}`;
//         const response = await axios.get(url);
//         console.log("Get API Response:", response.data); // Log the response data
//         dispatch(fetchquizfeedbackSuccess(response.data.data)); // Dispatch success action with the response data
//       } catch (error) {
//         console.error("API Error:", error.message);
//         dispatch(fetchquizfeedbackFailure(error.message));
//       }
//     }
//     return next(action);
//   };

export const GetByIDFeedbackApi = async (action) => {
      try {
        console.log("fetch quiz feedback", action);
        // Assuming 'action.payload' contains the data you want to senda
        const url = `${API_URL}/${action}`;
        const response = await axios.get(url);
        console.log("Get API Response:", response.data.data); // Log the response data
        return response.data.data;
      } catch (error) {
        console.error("API Error:", error.message);
      }

  };

export default GetByIDFeedbackApi;
