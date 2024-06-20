

import axios from "axios";

import {
  FETCH_LEARNERSCORE_REQUEST,
  fetchlearnerscoreSuccess,
  fetchlearnerscoreFailure,
} from "../../../actions/Quiz And Feedback Module/Learner/LearnerScorePageAction";

const baseUrl = "http://localhost:5199";

// http://localhost:5199/api/QuizEngine/attempt/08dc844d-d961-4bad-82d8-31996ebd660b

const LearnerScorePageApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === FETCH_LEARNERSCORE_REQUEST) {
      // debugger;
      const learnerattemptid = action.payload;
      //   debugger;
      //   if (!learnerattemptId) {
      //     console.error("API ERROR: LearnerattemptId is undefined");
      //     dispatch(fetchlearnerscoreFailure("LearnerattemptId is undefined."));
      //     return next(action);
      //   }
      try {
        const API_URL = `${baseUrl}/api/QuizEngine/attempts/${learnerattemptid}/result`;
        console.log("learnerscore", API_URL);
        const response = await axios.get(API_URL);
        console.log("learner score", response.data);
        // if (response.status === 200) {
        dispatch(fetchlearnerscoreSuccess(response.data));
        // } else {
        //   console.error("No data received.");
        // }
      } catch (error) {
        console.error(
          "API ERROR",
          error.response ? error.response.data.data : error.message
        );
        dispatch(fetchlearnerscoreFailure(error.message));
      }
    }
    return next(action);
  };




export default LearnerScorePageApi