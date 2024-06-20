import React from 'react'

// import {
//     CREATE_QUIZFEEDBACK_REQUEST,
//     CREATE_QUIZFEEDBACK_SUCCESS,
//     CREATE_QUIZFEEDBACK_FAILURE,
//   } from '../../src/actions/QuizFeedbackAction';

import { CREATE_QUIZFEEDBACK_REQUEST,CREATE_QUIZFEEDBACK_SUCCESS,CREATE_QUIZFEEDBACK_FAILURE } from '../../actions/Quiz And Feedback Module/QuizFeedbackAction';
  
  const initialState = {
    quizfeedback: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
  
  const QuizFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
       case CREATE_QUIZFEEDBACK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_QUIZFEEDBACK_SUCCESS:
        return {
          ...state,
          loading: false,
          quizfeedback: action.payload,
          isSubmitted:true,
          error: null,
        };
       
      case CREATE_QUIZFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      
      default:
        return state;
    }
  };

export default QuizFeedbackReducer