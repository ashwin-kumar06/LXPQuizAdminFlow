import axios from 'axios';
import {
  FETCH_REVIEW_REQUEST,
  fetchReviewSuccess,
  fetchReviewFailure
} from '../../../actions/Quiz And Feedback Module/Learner/ReviewAction';

const reviewApi = ({ dispatch, getState }) => next => async action => {
  if (action.type === FETCH_REVIEW_REQUEST) {
    const { attemptId } = action.payload;
    console.log('Fetching review data...');
    try {
      const response = await axios.get(`http://localhost:5199/api/QuizEngine/attempts/${attemptId}`);
      console.log('Review data:', response.data);
      dispatch(fetchReviewSuccess(response.data));
    } catch (error) {
      console.error('Error fetching review data:', error);
      dispatch(fetchReviewFailure(error.message));
    }
  }
  return next(action);
};

export default reviewApi;



















// import axios from 'axios';
// import {
//   FETCH_REVIEW_REQUEST,
//   fetchReviewSuccess,
//   fetchReviewFailure
// } from '../../actions/Quiz And Feedback Module/ReviewAction';

// const reviewApi = ({ dispatch, getState }) => next => async action => {
//   if (action.type === FETCH_REVIEW_REQUEST) {
//     const { attemptId } = action;
//     console.log('Fetching review data...');
//     try {
//      // const response = await axios.get(`http://localhost:5199/api/QuizEngine/attempt/${attemptId}/review`);
//       // const response = await axios.get(`http://localhost:5199/api/QuizEngine/attempt/${attemptId}`);
//       const response = await axios.get(`http://localhost:5199/api/QuizEngine/attempt/${attemptId}/review`);
//       console.log('Review data:', response.data);
//       dispatch(fetchReviewSuccess(response.data));
//     } catch (error) {
//       console.error('Error fetching review data:', error);
//       dispatch(fetchReviewFailure(error.message));
//     }
//   }
//   return next(action);
// };

// export default reviewApi;