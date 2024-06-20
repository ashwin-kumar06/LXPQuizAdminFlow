export const DELETE_QUIZ_QUESTION_REQUEST='FETCH_ALL_ALL_QUIZFEEDBACK_REQUEST';
export const DELETE_QUIZ_QUESTION_SUCCESS='FETCH_ALL_QUIZFEEDBACK_SUCCESS';
export const DELETE_QUIZ_QUESTION_FAILURE='FETCH_ALL_QUIZFEEDBACK_FAILURE';
 
export const deleteQuizQuestionRequest=(formData)=>({
    type:DELETE_QUIZ_QUESTION_REQUEST,
    payload:formData
});
 
export const deleteQuizQuestionSuccess=(deleteQuestion)=>({
    type:DELETE_QUIZ_QUESTION_SUCCESS,
    payload:deleteQuestion
});
 
export const deleteQuizQuestionFailure=(error)=>({
    type:DELETE_QUIZ_QUESTION_FAILURE,
    payload:error
});