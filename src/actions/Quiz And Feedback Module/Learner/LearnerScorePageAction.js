
export const FETCH_LEARNERSCORE_REQUEST = "FETCH_LEARNERSCORE_REQUEST";
export const FETCH_LEARNERSCORE_SUCCESS = "FETCH_LEARNERSCORE_SUCCESS";
export const FETCH_LEARNERSCORE_FAILURE = "FETCH_LEARNERSCORE_FAILURE";

export const fetchlearnerscoreRequest = (learnerattemptid) => ({
  type: FETCH_LEARNERSCORE_REQUEST,
  payload: learnerattemptid,
});

export const fetchlearnerscoreSuccess = (learnerscore) => ({
  type: FETCH_LEARNERSCORE_SUCCESS,
  payload: learnerscore,
});

export const fetchlearnerscoreFailure = (error) => ({
  type: FETCH_LEARNERSCORE_FAILURE,
  payload: error,
});
