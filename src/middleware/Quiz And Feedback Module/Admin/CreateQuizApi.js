import {
  SET_QUIZ_DETAILS_REQUEST,
  setQuizDetailsSuccess,
  setQuizDetailsFailure,
} from "../../../actions/Quiz And Feedback Module/Admin/CreateQuizAction";
import axios from "axios";

const API_URL = "http://localhost:5199/api/Quiz";

export const CreateQuizApi = async (action) => {
      try {
        console.log("Creating", action);
        const response = await axios.post(API_URL, action);
        console.log("feed Post API Response:", response.data);
      } catch (error) {
        console.error("API Error:", error.message);
        throw error; // Throw the error for better error handling
      }

  };

export default CreateQuizApi;
