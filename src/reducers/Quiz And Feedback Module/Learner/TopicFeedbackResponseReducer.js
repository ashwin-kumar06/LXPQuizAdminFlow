import { TOPICFEEDBACKRESPONSE_REQUEST,TOPICFEEDBACKRESPONSE_SUCCESS,TOPICFEEDBACKRESPONSE_FAILURE } from '../../../actions/Quiz And Feedback Module/Learner/TopicFeedbackResponseAction';
 
const initialState = {
  topicfeedbackquestions:[],
  loading: false,
  error: null,
 
};
 
const TopicFeedbackResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOPICFEEDBACKRESPONSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOPICFEEDBACKRESPONSE_SUCCESS:
      return {
        ...state,
        loading: false,
        topicfeedbackquestions: action.payload,
      };
    case TOPICFEEDBACKRESPONSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
 
    default:
      return state;
  }
};
 
export default TopicFeedbackResponseReducer