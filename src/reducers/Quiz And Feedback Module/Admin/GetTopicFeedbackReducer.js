import React from 'react'
// import { FETCH_ALL_TOPICFEEDBACK_REQUEST,FETCH_ALL_TOPICFEEDBACK_SUCCESS,FETCH_ALL_TOPICFEEDBACK_FAILURE } from '../actions/GetTopicFeedbackAction';
 import { FETCH_ALL_TOPICFEEDBACK_REQUEST,FETCH_ALL_TOPICFEEDBACK_SUCCESS,FETCH_ALL_TOPICFEEDBACK_FAILURE } from '../../actions/Quiz And Feedback Module/GetTopicFeedbackAction';
const initialState = { 
    topicfeedback: [],
    loading: false,
    error: null,
    isSubmitted:false,
  };
 
  const GetTopicFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_ALL_TOPICFEEDBACK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ALL_TOPICFEEDBACK_SUCCESS:
        console.log('Topicfeedback FETCHED:', action.payload);
       
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          topicfeedback:action.payload,
          isSubmitted:true,
          error: null,
        };
       
      case FETCH_ALL_TOPICFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
     
      default:
        return state;
    }
  };
 
export default GetTopicFeedbackReducer