export const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAILURE = "FETCH_QUESTIONS_FAILURE";

export const fetchQuestionsRequest = (quizId) => ({
  type: FETCH_QUESTIONS_REQUEST,
  payload: quizId,
});

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

export const fetchQuestionsFailure = (error) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: error,
});


export const CREATE_ATTEMPT_REQUEST = "CREATE_ATTEMPT_REQUEST";
export const CREATE_ATTEMPT_SUCCESS = "CREATE_ATTEMPT_SUCCESS";
export const CREATE_ATTEMPT_FAILURE = "CREATE_ATTEMPT_FAILURE";

export const CreateAttemptRequest = (learner) => ({
  type:CREATE_ATTEMPT_REQUEST,
  payload:learner,
});

export const CreateAttemptSuccess = (takequiz) => ({
  type:CREATE_ATTEMPT_SUCCESS,
  payload:takequiz,
});

export const CreateAttemptFailure = (error) => ({
  type:CREATE_ATTEMPT_FAILURE,
  payload: error,
});



