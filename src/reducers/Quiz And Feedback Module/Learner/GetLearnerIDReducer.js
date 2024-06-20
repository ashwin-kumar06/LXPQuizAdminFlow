import React from 'react'
 
import { FETCH_LEARNERID_REQUEST,FETCH_LEARNERID_SUCCESS,FETCH_LEARNERID_FAILURE } from '../../../actions/Quiz And Feedback Module/Learner/GetLearnerIDAction';
 
const initialState = {
  learnerId: [],
  loading: false,
  error: null,
  isSubmitted: false,
};
 
  const GetLearnerIDReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LEARNERID_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_LEARNERID_SUCCESS:
        console.log("Learner Details:", action.payload);
 
        // Add the new course to the existing courses array
        return {
          ...state,
          loading: false,
          learnerId: action.payload,
          isSubmitted: true,
          error: null,
        };
 
      case FETCH_LEARNERID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
 
      default:
        return state;
    }
  };
 
export default GetLearnerIDReducer