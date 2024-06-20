import axios from 'axios';
import {FETCH_QUESTIONS_REQUEST, fetchQuestionsSuccess, fetchQuestionsFailure } from '../../../actions/Quiz And Feedback Module/Learner/AttemptQuizAction';

// const API_URL = 'http://localhost:5199/api/QuizEngine/questions/';
// const API_URL = 'http://localhost:5199/api/QuizEngine/quiz/2bc763c7-a3fe-43cd-aa08-5236d1cbc672/questions';

export const fetchQuestionsMiddleware = ({dispatch}) => (next) => async (action) => {
  if (action.type === FETCH_QUESTIONS_REQUEST) {
    try {
      // const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions/${action.payload}`);
      const response = await axios.get(`http://localhost:5199/api/QuizEngine/quiz/${action.payload}/questions`);
      dispatch(fetchQuestionsSuccess(response.data));
      console.log(response.data)
    } catch (error) {
      dispatch(fetchQuestionsFailure(error.message));
    }
  }
  return next(action);
};


















// import React from 'react'

// import axios from "axios";
// import {
//   FETCH_QUESTIONS_REQUEST,
//   fetchQuestionsSuccess,
//   fetchQuestionsFailure,
// } from "../../../src/actions/Quiz And Feedback Module/AttemptQuizAction";

// // const API_URL = 'http://localhost:5199/api/QuizEngine/questions/';
// // const API_URL = 'http://localhost:5199/api/QuizEngine/quiz/2bc763c7-a3fe-43cd-aa08-5236d1cbc672/questions';

// export const fetchQuestionsMiddleware =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type === FETCH_QUESTIONS_REQUEST) {
//       try {
//         // const response = await axios.get(`http://localhost:5199/api/QuizEngine/questions/${action.payload}`);
//         const response = await axios.get(
//           `http://localhost:5199/api/QuizEngine/quiz/${action.payload}/questions`
//         );
//         dispatch(fetchQuestionsSuccess(response.data));
//         console.log(response.data);
//       } catch (error) {
//         dispatch(fetchQuestionsFailure(error.message));
//       }
//     }
//     return next(action);
//   };
// export default fetchQuestionsMiddleware;