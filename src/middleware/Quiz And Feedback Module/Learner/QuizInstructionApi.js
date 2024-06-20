import {
  FETCH_QUIZINSTRUCTION_REQUEST,
  fetchQuizInstructionSuccess,
  fetchQuizInstructionFailure,
} from "../../../actions/Quiz And Feedback Module/Learner/QuizInstructionAction";
import axios from "axios";

// const API_URL = `http://localhost:5199/api/QuizEngine/topic/${action.payload}/quiz`;

export const QuizInstructionApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === FETCH_QUIZINSTRUCTION_REQUEST) {
      try {
        console.log("QuizInstruction_Topic ID", action.payload);
        const response = await axios.get(`http://localhost:5199/api/QuizEngine/topic/${action.payload}/quiz`);
        console.log("Get Quiz Details API Response:", response.data);
        dispatch(fetchQuizInstructionSuccess(response.data));
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(fetchQuizInstructionFailure(error.message));
        throw error; // Throw the error for better error handling
      }
    }
    return next(action);
  };
