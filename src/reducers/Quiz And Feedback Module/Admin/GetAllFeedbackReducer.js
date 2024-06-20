import React from 'react'
// import { FETCH_ALL_QUIZFEEDBACK_REQUEST,FETCH_ALL_QUIZFEEDBACK_SUCCESS,FETCH_ALL_QUIZFEEDBACK_FAILURE } from '../actions/GetAllQuizFeedbackAction';
import { FETCH_ALL_QUIZFEEDBACK_REQUEST,FETCH_ALL_QUIZFEEDBACK_SUCCESS,FETCH_ALL_QUIZFEEDBACK_FAILURE } from '../../actions/Quiz And Feedback Module/GetAllQuizFeedbackAction'; 
const initialState = { 
    quizfeedback: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
 
  const GetAllFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_ALL_QUIZFEEDBACK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ALL_QUIZFEEDBACK_SUCCESS:
        console.log('Quizfeedback FETCHED:', action.payload);
       
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          quizfeedback: [...state.quizfeedback, action.payload],
          isSubmitted:true,
          error: null,
        };
       
      case FETCH_ALL_QUIZFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };
 
export default GetAllFeedbackReducer