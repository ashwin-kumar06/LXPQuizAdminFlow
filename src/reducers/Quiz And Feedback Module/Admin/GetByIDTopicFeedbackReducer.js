
import React from 'react'

// import { FETCH_TOPICFEEDBACK_REQUEST,FETCH_TOPICFEEDBACK_SUCCESS,FETCH_TOPICFEEDBACK_FAILURE } from '../actions/GetByIDTopicFeedbackAction';
import { FETCH_TOPICFEEDBACK_REQUEST,FETCH_TOPICFEEDBACK_SUCCESS,FETCH_TOPICFEEDBACK_FAILURE } from '../../actions/Quiz And Feedback Module/GetByIDTopicFeedbackAction';

const initialState = {
  quizfeedback: [],
  loading: false,
  error: null,
  isSubmitted: false,
};

const GetByIDTopicFeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPICFEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOPICFEEDBACK_SUCCESS:
      console.log("Topicfeedback FETCHED:", action.payload);

      // Add the new course to the existing courses array
      return {
        ...state,
        loading: false,
        quizfeedback: action.payload,
        isSubmitted: true,
        error: null,
      };

    case FETCH_TOPICFEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};




export default GetByIDTopicFeedbackReducer