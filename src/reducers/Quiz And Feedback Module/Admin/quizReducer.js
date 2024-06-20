// const initialState = {
//     questions: []
//   };
  
//   const quizReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_QUESTION':
//         return {
//           ...state,
//           questions: [...state.questions, action.payload]
//         };
//       case 'EDIT_QUESTION':
//         return {
//           ...state,
//           questions: state.questions.map(question =>
//             question.id === action.payload.questionId ? { ...question, text: action.payload.newText } : question
//           )
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default quizReducer;
  