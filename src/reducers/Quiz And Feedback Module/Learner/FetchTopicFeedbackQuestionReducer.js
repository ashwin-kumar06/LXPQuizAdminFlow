import {FETCH_TOPICFEEDBACKQUESTION_REQUEST,FETCH_TOPICFEEDBACKQUESTION_SUCCESS,FETCH_TOPICFEEDBACKQUESTION_FAILURE} from '../../../actions/Quiz And Feedback Module/Learner/FetchTopicFeedbackQuestionAction';
 
const initialState = {
  topicfeedbackquestions:[],
  loading: false,
  error: null,
  isSubmitted: false,
};
 
const FetchTopicFeedbackQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPICFEEDBACKQUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOPICFEEDBACKQUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        topicfeedbackquestions: action.payload,
      };
    case FETCH_TOPICFEEDBACKQUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
 
    default:
      return state;
  }
};
 
export default FetchTopicFeedbackQuestionReducer