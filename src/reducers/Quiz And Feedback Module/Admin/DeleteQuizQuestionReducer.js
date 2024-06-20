// import { DELETE_QUIZ_QUESTION_REQUEST,DELETE_QUIZ_QUESTION_FAILURE,DELETE_QUIZ_QUESTION_SUCCESS } from "../../actions/Quiz And Feedback Module/DeleteQuizQuestionAction";
import { DELETE_QUIZ_QUESTION_REQUEST,DELETE_QUIZ_QUESTION_SUCCESS,DELETE_QUIZ_QUESTION_FAILURE } from "../../../actions/Quiz And Feedback Module/Admin/DeleteQuizQuestionAction";
const initialState = { 
    deleteQuestion: null,
    loading: false,
    error: null,
    isSubmitted:false,
  };
 
  const deleteQuizQuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
       case DELETE_QUIZ_QUESTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_QUIZ_QUESTION_SUCCESS:       
        return {
          ...state,
          deleteQuestion: action.payload,
          loading: false,
          isSubmitted:true,
          error: null,
        };
       
      case DELETE_QUIZ_QUESTION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };
 
export default deleteQuizQuestionsReducer