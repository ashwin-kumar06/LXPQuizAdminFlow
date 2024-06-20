
export const FETCH_LEARNERID_REQUEST = "FETCH_LEARNERID_REQUEST";
export const FETCH_LEARNERID_SUCCESS = "FETCH_LEARNERID_SUCCESS";
export const FETCH_LEARNERID_FAILURE = "FETCH_LEARNERID_FAILURE";
 
export const fetchlearneridRequest = (learnerId) => ({
  type: FETCH_LEARNERID_REQUEST,
  payload: learnerId,
});
 
export const fetchleatneridSuccess = (learnerdetails) => ({
  type: FETCH_LEARNERID_SUCCESS,
  payload: learnerdetails,
});
 
export const fetchlearneridFailure = (error) => ({
  type: FETCH_LEARNERID_FAILURE,
  payload: error,
});