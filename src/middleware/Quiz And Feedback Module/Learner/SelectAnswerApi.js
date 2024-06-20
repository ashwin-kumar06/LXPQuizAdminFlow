import axios from 'axios';
import {
  SELECT_ANSWER_REQUEST,
  selectAnswerSuccess,
  selectAnswerFailure,
  SELECT_ANSWER_STATUS,
} from '../../../actions/Quiz And Feedback Module/Learner/SelectAnswerAction';

const API_URL = 'http://localhost:5199/api/QuizEngine/answer';

export const selectAnswerMiddleware = ({dispatch,getState}) => (next) => async (action) => {

    if (action.type === SELECT_ANSWER_REQUEST) {
      console.log("isRequesting", getState().SelectAnswer);
     
      const ReducerData = getState().SelectAnswer;
      if (!ReducerData.isRequesting) {
        dispatch({ type: SELECT_ANSWER_STATUS, payload: true });
       
        try {
          const response = await axios.post(API_URL,action.payload);
          console.log('API Response1:', response.data); 
          if(response.data.statusCode==412){
            //dispatch(createTopicsExists());
            console.log("Response Exists");
          }
          else{
            dispatch(selectAnswerSuccess(response.data)); 
            console.log("successfullresponse",response.data)
          }     
        }
        catch (error) {
          console.error('API Error:', error.message);
          dispatch(selectAnswerFailure(error.message));
        } finally{
          dispatch({type:SELECT_ANSWER_STATUS,payload:false})
         
          }
        }
     }
  
    return next(action);
  };







// import axios from 'axios';
// import {
//   SELECT_ANSWER_REQUEST,
//   selectAnswerSuccess,
//   selectAnswerFailure,
// } from '../../actions/Quiz And Feedback Module/SelectAnswerAction';

// export const selectAnswerMiddleware = ({ dispatch }) => (next) => async (action) => {
//   if (action.type === SELECT_ANSWER_REQUEST) {
//     try {
//       const response = await axios.post('http://localhost:5199/api/QuizEngine/answer', action.payload);
//       dispatch(selectAnswerSuccess(response.data));
//       console.log('Answer submitted successfully:', response.data);
//     } catch (error) {
//       console.error('Error submitting answer:', error.message);
//       dispatch(selectAnswerFailure(error.message));
//     }
//   }
//   return next(action);
// };