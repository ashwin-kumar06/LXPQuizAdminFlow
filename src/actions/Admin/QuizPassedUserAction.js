export const FETCH_QUIZ_REQUEST_USERS='FETCH_QUIZ_REQUEST_USERS'
export const FETCH_QUIZ_PASSED_USERS='FETCH_QUIZ_PASSED_USERS'
export const FETCH_QUIZ_FAILED_USERS='FETCH_QUIZ_FAILED_USERS'

export const FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO='FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO'

export const fetchquizpassedusersRequest = (quizId) =>
(
    {
        type: FETCH_QUIZ_REQUEST_USERS,
        payload:quizId
    }

);
export const fetchquizpassedusersSuccess = (passedusers) =>
(
    {
        type: FETCH_QUIZ_PASSED_USERS,
        payload:passedusers
    }

);


// export const fetchCoursesSuccesswithlenghtzero=(message)=>(
//     {
//         type:FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO,
//         payload:message
//     }
// )

export const fetchquizpassedusersFailure = (error) =>
(
    {
        type: FETCH_QUIZ_FAILED_USERS,
        payload:error
    }

);








