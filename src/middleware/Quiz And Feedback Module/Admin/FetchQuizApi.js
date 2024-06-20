import axios from "axios";
export const GetQuizDetails = async (quizId) => {
  try {
    const response = await axios.get(
      `http://localhost:5199/api/Quiz/${quizId}`
    );
    console.log("quiz details", response);
    return response.data.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
};
