import axios from 'axios';
// import { CREATE_QUIZFEEDBACK_REQUEST, createquizfeedbackSuccess, createquizfeedbackFailure, createquizfeedbackRequest, CREATE_QUIZFEEDBACK_SUCCESS } from '../../actions/Quiz And Feedback Module/QuizFeedbackAction';

const API_URL = 'http://localhost:5199/api/QuizFeedback/AddFeedbackQuestion';

// export const QuizFeedbackApi = ({ dispatch }) => (next) => async (action) => {
//   if (action.type == CREATE_QUIZFEEDBACK_REQUEST) {
//     try {
//       console.log("post quiz", action.payload);
//       const response = await axios.post(API_URL, action.payload);
//       console.log('feed Post API Response:', response.data); // Log the response data
//       dispatch(createquizfeedbackSuccess(response.data.data)); // Dispatch success action with the response data                                            
//     } catch (error) {
//       console.error('API Error:', error.message);
//       dispatch(createquizfeedbackFailure(error.message));
//     }
//   }
//   return next(action);
// };

export const QuizFeedbackApi = async (action) => {

  try {
    console.log("post quiz", action);
    const response = await axios.post(API_URL, action);
    console.log('feed Post API Response:', response.data); // Log the response data
  } catch (error) {
    console.error('API Error:', error.message);
  }

};