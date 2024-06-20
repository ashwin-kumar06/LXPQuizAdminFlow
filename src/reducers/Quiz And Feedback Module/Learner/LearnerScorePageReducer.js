import React from 'react'
import { FETCH_LEARNERSCORE_REQUEST,FETCH_LEARNERSCORE_SUCCESS,FETCH_LEARNERSCORE_FAILURE } from '../../../actions/Quiz And Feedback Module/Learner/LearnerScorePageAction';
const initialState = {
  learnerscoredetails:null,
  loading: false,
  error: null,
  isSubmitted: false,
};
 
  const LearnerScorePageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LEARNERSCORE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_LEARNERSCORE_SUCCESS:
        console.log("Learner Details:", action.payload);

        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          learnerscoredetails: action.payload,
          isSubmitted: true,
          error: null,
        };

      case FETCH_LEARNERSCORE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };






export default LearnerScorePageReducer