import {FETCH_QUIZFEEDBACKQUESTION_REQUEST,fetchquizfeedbackquestionSuccess,fetchquizfeedbackquestionFailure} from '../../../actions/Quiz And Feedback Module/Learner/FetchQuizFeedbackQuestionAction';
import axios from 'axios';
 
export const FetchQuizFeedbackQuestionApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_QUIZFEEDBACKQUESTION_REQUEST) {
        try {
            // console.log("sending quizId", action.payload);
            const response = await axios.get(`http://localhost:5199/api/QuizFeedback/GetAllFeedbackQuestions/${action.payload}`);
            console.log("FetchingQuizFeedbackQuestions:",response.data);
            dispatch(fetchquizfeedbackquestionSuccess(response.data.data));
            console.log("Success",fetchquizfeedbackquestionSuccess(response.data));
 
        } catch (error) {
            console.log("Error fetching question: ", error.message);
            dispatch(fetchquizfeedbackquestionFailure(error.message));
        }
    }
    return next(action);
}