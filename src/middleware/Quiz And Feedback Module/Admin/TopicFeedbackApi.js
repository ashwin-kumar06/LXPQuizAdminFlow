import axios from "axios";
// import {
//   createtopicfeedbackSuccess,
//   createtopicfeedbackFailure,
//   createtopicfeedbackRequest,
//   CREATE_TOPICFEEDBACK_SUCCESS,
//   CREATE_TOPICFEEDBACK_REQUEST,
// } from "../../actions/Quiz And Feedback Module/TopicFeedbackAction";

const API_URL = "http://localhost:5199/api/TopicFeedback/question";

// export const TopicFeedbackApi =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type == CREATE_TOPICFEEDBACK_REQUEST) {
//       try {
//         console.log("post", action.payload);
//         // Assuming 'action.payload' contains the data you want to senda
//         const response = await axios.post(API_URL, action.payload);
//         console.log("API Response:", response.data); // Log the response data
//         dispatch(createtopicfeedbackSuccess(response.data.data)); // Dispatch success action with the response data
//       } catch (error) {
//         console.error("API Error:", error.message);
//         dispatch(createtopicfeedbackFailure(error.message));
//       }
//     }
//     return next(action);
//   };

export const TopicFeedbackApi = async (action) => {
   
  try {
    console.log("post", action);
    // Assuming 'action.payload' contains the data you want to senda
    const response = await axios.post(API_URL, action);
    console.log("API Response:", response.data.data); // Log the response data
  } catch (error) {
    console.error("API Error:", error.message);
  }

};
