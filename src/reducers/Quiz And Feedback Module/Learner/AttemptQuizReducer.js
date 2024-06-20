import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from '../../../actions/Quiz And Feedback Module/Learner/AttemptQuizAction';

const initialState = {
  loading: false,
  questions: [],
  error: null,
};

const AttemptQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case FETCH_QUESTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default AttemptQuizReducer;




















// import {
//   FETCH_QUESTIONS_REQUEST,
//   FETCH_QUESTIONS_SUCCESS,
//   FETCH_QUESTIONS_FAILURE,
// } from '../../actions/Quiz And Feedback Module/AttemptQuizAction';

// const initialState = {
// loading: false,
// questions: {},
// error: null,
// };

// const AttemptQuizReducer = (state = initialState, action) => {
// switch (action.type) {
//   case FETCH_QUESTIONS_REQUEST:
//     return { ...state, loading: true };
//   case FETCH_QUESTIONS_SUCCESS:
//     console.log("attemptquiz Reducer", action.payload);
//     return { ...state, loading: false, questions: action.payload };
//   case FETCH_QUESTIONS_FAILURE:
//     return { ...state, loading: false, error: action.payload };
//   default:
//     return state;
// }
// };

// export default AttemptQuizReducer;
















// import {
//     FETCH_QUESTIONS_REQUEST,
//     FETCH_QUESTIONS_SUCCESS,
//     FETCH_QUESTIONS_FAILURE,
//   } from '../../../src/actions/Quiz And Feedback Module/AttemptQuizAction';
 
// const initialState = {
//   loading: false,
//   questions: {},
//   error: null,
// };
 
// const AttemptQuizReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_QUESTIONS_REQUEST:
//       return { ...state, loading: true };
//     case FETCH_QUESTIONS_SUCCESS:
//       console.log("attemptquiz Reducer", action.payload);
//       return { ...state, loading: false, questions: action.payload };
//     case FETCH_QUESTIONS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
 

// export default AttemptQuizReducer

