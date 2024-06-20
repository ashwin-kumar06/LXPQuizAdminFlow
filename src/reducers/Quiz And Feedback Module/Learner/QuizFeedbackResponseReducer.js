import { QUIZFEEDBACKRESPONSE_REQUEST,QUIZFEEDBACKRESPONSE_SUCCESS,QUIZFEEDBACKRESPONSE_FAILURE } from '../../../actions/Quiz And Feedback Module/Learner/QuizFeedbackResponseAction';
 
const initialState = {
  quizfeedbackquestions:[],
  loading: false,
  error: null,
 
};
 
const QuizFeedbackResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUIZFEEDBACKRESPONSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case QUIZFEEDBACKRESPONSE_SUCCESS:
      return {
        ...state,
        loading: false,
        quizfeedbackquestions: action.payload,
      };
    case QUIZFEEDBACKRESPONSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
 
    default:
      return state;
  }
};
 
export default QuizFeedbackResponseReducer