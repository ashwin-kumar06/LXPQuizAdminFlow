import React from 'react'

// import {
//     CREATE_TOPICFEEDBACK_REQUEST,
//     CREATE_TOPICFEEDBACK_SUCCESS,
//     CREATE_TOPICFEEDBACK_FAILURE,
//   } from '../actions/TopicFeedbackAction';

import { CREATE_TOPICFEEDBACK_REQUEST,CREATE_TOPICFEEDBACK_SUCCESS,CREATE_TOPICFEEDBACK_FAILURE } from '../../actions/Quiz And Feedback Module/TopicFeedbackAction';

  
  const initialState = {
    
    TopicFeedback: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
  
  const TopicFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
       case CREATE_TOPICFEEDBACK_REQUEST:
        
        return {
          ...state,
          loading: true,
        };
      case CREATE_TOPICFEEDBACK_SUCCESS:
        console.log('topic reducer', action.payload);
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          quizfeedback: action.payload,
          isSubmitted:true,
          error: null,
        };
       
      case CREATE_TOPICFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      
      default:
        return state;
    }
  };

export default TopicFeedbackReducer