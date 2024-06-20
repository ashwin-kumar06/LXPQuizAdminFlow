import {
    SELECT_ANSWER_REQUEST,
    SELECT_ANSWER_SUCCESS,
    SELECT_ANSWER_FAILURE,
    SELECT_ANSWER_STATUS,
  } from '../../../actions/Quiz And Feedback Module/Learner/SelectAnswerAction';
  
  const initialState = {
    questions: [],
    loading: false,
    error: null,
    isRequesting:false,
  };
  
  const SelectAnswerReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_ANSWER_REQUEST:
        return { ...state, loading: true , error: null };
      case SELECT_ANSWER_SUCCESS:
        return { ...state, loading: false };
      case SELECT_ANSWER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case SELECT_ANSWER_STATUS:
      return{
        ...state,
        isRequesting:action.payload,
      };
      default:
        return state;
    }
  };
  
  export default SelectAnswerReducer;