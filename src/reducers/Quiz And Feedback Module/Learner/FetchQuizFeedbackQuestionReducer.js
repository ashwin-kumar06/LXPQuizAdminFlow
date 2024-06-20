import {FETCH_QUIZFEEDBACKQUESTION_REQUEST,FETCH_QUIZFEEDBACKQUESTION_SUCCESS,FETCH_QUIZFEEDBACKQUESTION_FAILURE} from '../../../actions/Quiz And Feedback Module/Learner/FetchQuizFeedbackQuestionAction';
 
const initialState = {
  quizfeedbackquestions:[],
  loading: false,
  error: null,
  isSubmitted: false,
};
 
const FetchQuizFeedbackQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZFEEDBACKQUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUIZFEEDBACKQUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        quizfeedbackquestions: action.payload,
      };
    case FETCH_QUIZFEEDBACKQUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
 
    default:
      return state;
  }
};
 
export default FetchQuizFeedbackQuestionReducer