export const FETCH_QUIZ_REQUEST_ACTION_USERS = 'FETCH_QUIZ_REQUEST_ACTION_USERS'
export const FETCH_QUIZ_FAILED_ACTION_USERS = 'FETCH_QUIZ_FAILED_ACTION_USERS'
export const FETCH_QUIZ_FAILURE_ACTION_USERS = 'FETCH_QUIZ_FAILURE_ACTION_USERS'

export const FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO = 'FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO'

export const fetchquizfailedusersRequest = (FailedUserQuizId) =>
(
    {
        type: FETCH_QUIZ_REQUEST_ACTION_USERS,
        payload: FailedUserQuizId
    }

);


export const fetchquizfailedusersSuccess = (failedusers) =>
(
    {
        type: FETCH_QUIZ_FAILED_ACTION_USERS,
        payload: failedusers
    }

);


export const fetchquizfailedusersFailure = (error) =>
(
    {
        type: FETCH_QUIZ_FAILURE_ACTION_USERS,
        payload: error
    }

);











