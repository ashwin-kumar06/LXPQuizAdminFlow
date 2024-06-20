
import React from 'react'
import {
  UPDATE_TOPICFEEDBACK_REQUEST,
  UPDATE_TOPICFEEDBACK_SUCCESS,
  UPDATE_TOPICFEEDBACK_FAILURE,
} from "../../../actions/Quiz And Feedback Module/Admin/UpdateTopicFeedbackAction";

  const initialState = {
    quizfeedback: [],
    loading: false,
    error: null,
    isSubmitted: false,
  };

  const UpdateTopicFeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TOPICFEEDBACK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_TOPICFEEDBACK_SUCCESS:
        console.log("Topic feedback reducer", action.payload);
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          quizfeedback: action.payload,
          isSubmitted: true,
          error: null,
        };

      case UPDATE_TOPICFEEDBACK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };





export default UpdateTopicFeedbackReducer