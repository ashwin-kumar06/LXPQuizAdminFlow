
import React from 'react'

// import { DELETE_TOPICFEEDBACK_REQUEST,DELETE_TOPICFEEDBACK_SUCCESS,DELETE_TOPICFEEDBACK_FAILURE } from '../../actions/Quiz And Feedback Module/DeleteTopicFeedbackAction';
import { DELETE_TOPICFEEDBACK_REQUEST,DELETE_TOPICFEEDBACK_SUCCESS,DELETE_TOPICFEEDBACK_FAILURE } from '../../../actions/Quiz And Feedback Module/Admin/DeleteTopicFeedbackAction';

 const initialState = {
   topicFeedbackId: [],
   loading: false,
   error: null,
   isSubmitted: false,
 };

 const DeleteTopicFeedbackReducer = (state = initialState, action) => {
   switch (action.type) {
     case DELETE_TOPICFEEDBACK_REQUEST:
       return {
         ...state,
         loading: true,
       };
     case DELETE_TOPICFEEDBACK_SUCCESS:
       console.log("quiz feedback reducer", action.payload);
       // Add the new course to the existing courses array
       return {
         ...state,
         loading: false,
         quizfeedback: action.payload,
         isSubmitted: true,
         error: null,
       };

     case DELETE_TOPICFEEDBACK_FAILURE:
       return {
         ...state,
         loading: false,
         error: action.payload,
       };

     default:
       return state;
   }
 };


export default DeleteTopicFeedbackReducer