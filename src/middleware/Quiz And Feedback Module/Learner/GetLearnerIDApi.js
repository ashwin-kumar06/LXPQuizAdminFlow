
import axios from "axios";
import {
  FETCH_LEARNERID_REQUEST,
  fetchleatneridSuccess,
  fetchlearneridFailure,
} from "../../../actions/Quiz And Feedback Module/Learner/GetLearnerIDAction";
// import { baseUrl } from "./api";
const baseUrl = "http://localhost:5199";
 
const GetLearnerIDApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === FETCH_LEARNERID_REQUEST) {
      const learnerId = action.payload;
      if (!learnerId) {
        console.error("API ERROR: LearnerId is undefined");
        dispatch(fetchlearneridFailure("LearnerId is undefined."));
        return next(action);
      }
      const API_URL = `${baseUrl}/lxp/learner/${learnerId}/learnerdetails`;
      try {
        const response = await axios.get(API_URL);
        if (response.status === 200) {
          dispatch(fetchleatneridSuccess(response.data.data[0]));
        } else {
          console.error("No data received.");
        }
      } catch (error) {
        console.error(
          "API ERROR",
          error.response ? error.response.data.data : error.message
        );
        dispatch(fetchlearneridFailure(error.message));
      }
    }
    return next(action);
  };


export default GetLearnerIDApi