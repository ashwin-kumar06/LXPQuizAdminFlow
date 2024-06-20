
import { FETCH_ALL_QUIZ_QUESTION_REQUEST, fetchAllQuizQuestionSuccess, fetchAllQuizQuestionFailure } from '../../../actions/Quiz And Feedback Module/Admin/FetchQuizQuestionsAction';
import axios from 'axios';
 
// export const FetchQuizQuestionsApi = ({ dispatch }) => (next) => async (action) => {
//     if (action.type === FETCH_ALL_QUIZ_QUESTION_REQUEST) {
//         try {
//             // console.log("sending quizId", action.payload);
//             const response = await axios.get(`http://localhost:5199/api/QuizQuestions/GetAllQuestionsByQuizId?quizId=${action.payload}`);
//             // console.log("api questions:",response.data);
//             dispatch(fetchAllQuizQuestionSuccess(response.data.data));
//         } catch (error) {
//             console.log("Error fetching question: ", error.message);
//             dispatch(fetchAllQuizQuestionFailure(error.message));
//         }
//     }
//     return next(action);
// }

export const FetchQuizQuestionsApi = async (action) => {
        try {
            // console.log("sending quizId", action.payload);
            const response = await axios.get(`http://localhost:5199/api/QuizQuestions/GetAllQuestionsByQuizId?quizId=${action}`);
            // console.log("api questions:",response.data.data);
            return response.data.data;
        } catch (error) {
            console.log("Error fetching question: ", error.message);
        }

}