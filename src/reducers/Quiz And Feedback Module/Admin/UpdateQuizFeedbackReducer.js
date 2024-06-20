
import React from 'react'
// import { UPDATE_QUIZFEEDBACK_REQUEST,UPDATE_QUIZFEEDBACK_SUCCESS,UPDATE_QUIZFEEDBACK_FAILURE } from '../actions/UpdateQuizFeedbackAction';
import { UPDATE_QUIZFEEDBACK_REQUEST,UPDATE_QUIZFEEDBACK_SUCCESS,UPDATE_QUIZFEEDBACK_FAILURE } from '../../../actions/Quiz And Feedback Module/Admin/UpdateQuizFeedbackAction';

  const initialState = {
    
    quizfeedback: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
  
  const UpdateQuizFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_QUIZFEEDBACK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_QUIZFEEDBACK_SUCCESS:
        console.log("quiz feedback reducer", action.payload);
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          quizfeedback: action.payload,
          isSubmitted: true,
          error: null,
        };

      case UPDATE_QUIZFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };





export default UpdateQuizFeedbackReducer