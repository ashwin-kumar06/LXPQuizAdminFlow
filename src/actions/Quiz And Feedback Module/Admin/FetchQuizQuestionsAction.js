export const FETCH_ALL_QUIZ_QUESTION_REQUEST =
  "FETCH_ALL_QUIZ_QUESTION_REQUEST";
export const FETCH_ALL_QUIZ_QUESTION_SUCCESS =
  "FETCH_ALL_QUIZ_QUESTION_SUCCESS";
export const FETCH_ALL_QUIZ_QUESTION_FAILURE =
  "FETCH_ALL_QUIZ_QUESTION_FAILURE";

export const fetchAllQuizQuestionRequest = (formData) => ({
  type: FETCH_ALL_QUIZ_QUESTION_REQUEST,
  payload: formData,
});

export const fetchAllQuizQuestionSuccess = (quizQuestions) => ({
  type: FETCH_ALL_QUIZ_QUESTION_SUCCESS,
  payload: quizQuestions,
});
export const fetchAllQuizQuestionFailure = (error) => ({
  type: FETCH_ALL_QUIZ_QUESTION_FAILURE,
  payload: error,
});
