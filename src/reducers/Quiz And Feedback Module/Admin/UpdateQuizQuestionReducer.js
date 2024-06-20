import React from 'react'
import { UPDATE_QUIZ_QUESTION_REQUEST,UPDATE_QUIZ_QUESTION_SUCCESS,UPDATE_QUIZ_QUESTION_FAILURE } from '../../../actions/Quiz And Feedback Module/Admin/UpdateQuizQuestionAction';

const initialState = { 
    editQuizQuestion: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
 
  const updateQuizQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
       case UPDATE_QUIZ_QUESTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_QUIZ_QUESTION_SUCCESS:       
        return {
          ...state,
          loading: false,
          editQuizQuestion: action.payload,
          isSubmitted:true,
          error: null,
        };
       
      case UPDATE_QUIZ_QUESTION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };
 
export default updateQuizQuestionReducer