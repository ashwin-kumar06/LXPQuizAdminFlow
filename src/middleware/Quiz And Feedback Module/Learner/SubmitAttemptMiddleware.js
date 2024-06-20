// middleware/submitAttemptMiddleware.js
import axios from 'axios';
import { SUBMIT_ATTEMPT_REQUEST, submitAttemptSuccess, submitAttemptFailure } from '../../../actions/Quiz And Feedback Module/Learner/SubmitAttemptAction';

const submitAttemptMiddleware = ({ dispatch }) => (next) => (action) => {
    if (action.type === SUBMIT_ATTEMPT_REQUEST) {
        const { AttemptId } = action.payload;
        console.log("Middleware - Attempt ID:", AttemptId);

        if (AttemptId) {
            return axios.post(`http://localhost:5199/api/QuizEngine/attempt/submit?attemptId=${AttemptId}`)
                .then(response => {
                    console.log("API Response:", response.data);
                    dispatch(submitAttemptSuccess(response.data));
                })
                .catch(error => {
                    console.error("API Error:", error.message);
                    dispatch(submitAttemptFailure(error.message));
                });
        } else {
            console.error("Attempt ID is undefined in middleware");
            return Promise.reject("Attempt ID is undefined");
        }
    }

    return next(action);
};

export default submitAttemptMiddleware;


















// // middleware/submitAttemptMiddleware.js
// import axios from 'axios';
// import { SUBMIT_ATTEMPT_REQUEST, submitAttemptSuccess, submitAttemptFailure } from '../../actions/Quiz And Feedback Module/SubmitAttemptAction';

// const submitAttemptMiddleware = ({ dispatch }) => (next) => (action) => {
//   if (action.type === SUBMIT_ATTEMPT_REQUEST) {
//     const { AttemptId } = action.payload;
//     console.log("Middleware - Attempt ID :", AttemptId); // Add logging here

//     axios.post(`http://localhost:5199/api/QuizEngine/attempt/submit?attemptId=${AttemptId}`)
//       .then(response => {
//         console.log("API Response:", response.data); // Add logging here
//         console.log("Submitted SuccessFully"); 
//         dispatch(submitAttemptSuccess(response.data));
//       })
//       .catch(error => {
//         console.error("API Error:", error.message); // Add logging here
//         dispatch(submitAttemptFailure(error.message));
//       });
//   }
//   return next(action);
// };

// export default submitAttemptMiddleware;






















// // middleware/submitAttemptMiddleware.js
// import axios from 'axios';
// import { SUBMIT_ATTEMPT_REQUEST, submitAttemptSuccess, submitAttemptFailure } from '../../actions/Quiz And Feedback Module/SubmitAttemptAction';

// const submitAttemptMiddleware = ({ dispatch }) => (next) => (action) => {
//   if (action.type === SUBMIT_ATTEMPT_REQUEST) {
//     const { AttemptId } = action.payload;
//     console.log("Middleware Attempt ID :", AttemptId);
//     axios.post(`http://localhost:5199/api/QuizEngine/attempt/submit?attemptId=${AttemptId}`)
//       .then(response => dispatch(submitAttemptSuccess(response.data)))
//       .catch(error => dispatch(submitAttemptFailure(error.message)));
//   }

//   return next(action);
// };

// export default submitAttemptMiddleware;
























// import {
//     SUBMIT_ATTEMPT_REQUEST,
//     submitAttemptSuccess,
//     submitAttemptFailure,
//   } from '../../actions/Quiz And Feedback Module/SubmitAttemptAction';
  
//   const submitAttemptMiddleware = (store) => (next) => async (action) => {
//     if (action.type === SUBMIT_ATTEMPT_REQUEST) {
//       const attemptId = action.payload;
//       try {
//         const response = await fetch(`http://localhost:5199/api/QuizEngine/attempt/submit?attemptId=${attemptId}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
  
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         const responseData = await response.json();
//         store.dispatch(submitAttemptSuccess(responseData));
//       } catch (error) {
//         store.dispatch(submitAttemptFailure(error.toString()));
//       }
//     }
  
//     return next(action);
//   };
  
//   export default submitAttemptMiddleware;