import {
  FETCH_QUIZINSTRUCTION_REQUEST,
  FETCH_QUIZINSTRUCTION_SUCCESS,
  FETCH_QUIZINSTRUCTION_FAILURE,
} from "../../../actions/Quiz And Feedback Module/Learner/QuizInstructionAction";

const initialState = {
  quizinstructiondetails: [],
  error: null,
  loading: false,
  isSubmitted: false,
};

const QuizInstructionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZINSTRUCTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUIZINSTRUCTION_SUCCESS:
      return {
        ...state,
        loading: false,
        quizinstructiondetails: action.payload,
        isSubmitted: true,
        error: null,
      };

    case FETCH_QUIZINSTRUCTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default QuizInstructionReducer;
