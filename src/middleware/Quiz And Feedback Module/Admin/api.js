import axios from "axios";

// export const PutQuizDetails = async(updatedQuizData) =>{
//   try{
//     const response = await axios.put(`http://localhost:5199/api/Quiz/${updatedQuizData.quizId}`, updatedQuizData)
//     console.log("Quiz edited successful",response.data);
//   }catch (error) {
//     console.error("Error:", error.message);
//     throw error.message;
//   }
// }

export const DeleteQuizDetails = async (quizId) => {
  console.log("delete quiz: ", quizId);
  try {
    const response = await axios.delete(
      `http://localhost:5199/api/Quiz/${quizId}`
    );
    console.log("Quiz deleted successful", response.data);
  } catch (error) {
    console.error("Error:", error.message);
    throw error.message;
  }
};

export default DeleteQuizDetails;
