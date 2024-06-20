export const FETCH_REVIEW_REQUEST = 'FETCH_REVIEW_REQUEST';
export const FETCH_REVIEW_SUCCESS = 'FETCH_REVIEW_SUCCESS';
export const FETCH_REVIEW_FAILURE = 'FETCH_REVIEW_FAILURE';

export const fetchReviewRequest = (attemptId) => ({
  type: FETCH_REVIEW_REQUEST,
  payload: { attemptId }
});

export const fetchReviewSuccess = (reviewData) => ({
  type: FETCH_REVIEW_SUCCESS,
  payload: reviewData
});

export const fetchReviewFailure = (error) => ({
  type: FETCH_REVIEW_FAILURE,
  payload: error
});

















// export const FETCH_REVIEW_REQUEST = 'FETCH_REVIEW_REQUEST';
// export const FETCH_REVIEW_SUCCESS = 'FETCH_REVIEW_SUCCESS';
// export const FETCH_REVIEW_FAILURE = 'FETCH_REVIEW_FAILURE';


// export const fetchReviewRequest = (attemptId) => {
// //   console.log('Fetching review request...');
//   console.log('Fetching review request for attempt ID :', attemptId);
//   return {
//     type: FETCH_REVIEW_REQUEST,
//     attemptId
//   };
// };

// export const fetchReviewSuccess = (reviewData) => {
//   console.log('Review data fetched successfully:', reviewData);
//   return {
//     type: FETCH_REVIEW_SUCCESS,
//     reviewData
//   };
// };

// export const fetchReviewFailure = (error) => {
//   console.error('Error fetching review data:', error);
//   return {
//     type: FETCH_REVIEW_FAILURE,
//     error
//   };
// };
