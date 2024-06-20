
import React from 'react'
// import { DELETE_QUIZFEEDBACK_REQUEST,DELETE_QUIZFEEDBACK_SUCCESS, DELETE_QUIZFEEDBACK_FAILURE} from '../../actions/Quiz And Feedback Module/DeleteQuizFeedbcakAction';
import { DELETE_QUIZFEEDBACK_REQUEST,DELETE_QUIZFEEDBACK_SUCCESS,DELETE_QUIZFEEDBACK_FAILURE } from '../../../actions/Quiz And Feedback Module/Admin/DeleteQuizFeedbcakAction';
 const initialState = {
   quizFeedbackQuestionId: [],
   loading: false,
   error: null,
   isSubmitted: false,
 };

 const DeleteQuizFeedbackReducer = (state = initialState, action) => {
   switch (action.type) {
     case DELETE_QUIZFEEDBACK_REQUEST:
       return {
         ...state,
         loading: true,
       };
     case DELETE_QUIZFEEDBACK_SUCCESS:
       console.log("quiz feedback reducer", action.payload);
       // Add the new course to the existing courses array
       return {
         ...state,
         loading: false,
         quizfeedback: action.payload,
         isSubmitted: true,
         error: null,
       };

     case DELETE_QUIZFEEDBACK_FAILURE:
       return {
         ...state,
         loading: false,
         error: action.payload,
       };

     default:
       return state;
   }
 };


export default DeleteQuizFeedbackReducer