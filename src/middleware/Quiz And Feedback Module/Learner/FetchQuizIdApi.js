
import { FETCH_QUIZ_ID_REQUEST, FETCH_QUIZ_ID_SUCCESS,FETCH_QUIZ_ID_FAILURE } from '../../actions/Quiz And Feedback Module/FetchQuizIdAction';
import { fetchQuizIdSuccess, fetchQuizIdRequest, fetchQuizIdFailure } from '../../actions/Quiz And Feedback Module/FetchQuizIdAction';
import axios from 'axios';
 
export const FetchQuizById = ({dispatch}) => (next) => async (action) => {
  if (action.type === FETCH_QUIZ_ID_REQUEST){
    try {
      console.log("sending topicId", action.payload);
      // const response = await axios.get(
      //   `http://localhost:5199/api/QuizEngine/topic/${action.payload}`
      // );
      
      // const response = await axios.get(`http://localhost:5199/api/Get/topic/${action.payload}`);
      const response = await axios.get(`http://localhost:5199/api/Get/topic/${action.payload}`);
      console.log("api quiz id:",response.data.data);
      dispatch(fetchQuizIdSuccess(response.data));
    } catch (error) {
      console.log("Fetching quizid: ", error.message);
      dispatch(fetchQuizIdFailure(error.message));  
    }
  }
  return next(action);
}