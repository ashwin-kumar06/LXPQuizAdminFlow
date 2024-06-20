import {FETCH_TOPICFEEDBACKQUESTION_REQUEST,fetchtopicfeedbackquestionSuccess,fetchtopicfeedbackquestionFailure} from '../../../actions/Quiz And Feedback Module/Learner/FetchTopicFeedbackQuestionAction';
import axios from 'axios';
 
export const FetchTopicFeedbackQuestionApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_TOPICFEEDBACKQUESTION_REQUEST) {
        try {
            // console.log("sending quizId", action.payload);
            const response = await axios.get(`http://localhost:5199/api/TopicFeedback/topic/${action.payload}`);
            console.log("FetchingTopicFeedbackQuestions:",response.data);
            dispatch(fetchtopicfeedbackquestionSuccess(response.data.data));
            console.log("Success",fetchtopicfeedbackquestionSuccess(response.data));
 
        } catch (error) {
            console.log("Error fetching question: ", error.message);
            dispatch(fetchtopicfeedbackquestionFailure(error.message));
        }
    }
    return next(action);
}