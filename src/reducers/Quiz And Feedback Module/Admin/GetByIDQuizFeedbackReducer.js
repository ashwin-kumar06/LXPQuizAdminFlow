import React from 'react'

// import { FETCH_QUIZFEEDBACK_REQUEST,FETCH_QUIZFEEDBACK_SUCCESS,FETCH_QUIZFEEDBACK_FAILURE } from '../actions/GetByIDFeedbackAction';
import { FETCH_QUIZFEEDBACK_REQUEST,FETCH_QUIZFEEDBACK_SUCCESS,FETCH_QUIZFEEDBACK_FAILURE } from '../../actions/Quiz And Feedback Module/GetByIDFeedbackAction';
const initialState = { 
    quizfeedback: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
 
  const GetByIDQuizFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUIZFEEDBACK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_QUIZFEEDBACK_SUCCESS:
        console.log("Quizfeedback FETCHED:", action.payload);

        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          quizfeedback: action.payload,
          isSubmitted: true,
          error: null,
        };

      case FETCH_QUIZFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };



export default GetByIDQuizFeedbackReducer