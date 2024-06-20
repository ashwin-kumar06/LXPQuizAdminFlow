// import axios from "axios"
// import { FETCH_QUIZ_REQUEST_USERS,fetchquizpassedusersSuccess,fetchquizpassedusersFailure} from "../../../actions/Admin/QuizPassedUserAction";

// // const API_URL =`http://localhost:5199/api/QuizReport/QuizReport/passedlearnersReport${quizId}`;



// const ApiQuizPassedUsers = ({dispatch}) =>(next)=> async (action)=>
// {
//  next(action);

//  const {quizid}=quizid;

//  console.log("API-Quizpassedusers",action.payload);


//  if(action.type===FETCH_QUIZ_REQUEST_USERS)
//  {
//     try{
//         const response =await axios.get(`http://localhost:5199/api/QuizReport/QuizReport/passedlearnersReport/${quizid}`)

//         console.log("QuizPassedUserAction",response.data);

//         if(response.status===200)
//         {
//             console.log("FetchQuizPassesUsers",response.data.data);
//             dispatch(fetchquizpassedusersSuccess(response.data.data))
//         }
//         else
//         {
//             console.error("No data received from API")
//         }
//     }
//     catch(error)
//     {
//      dispatch(fetchquizpassedusersFailure(error.message))

//     }
//  }

// }


// export default ApiQuizPassedUsers



import axios from "axios";
import { FETCH_QUIZ_REQUEST_USERS, fetchquizpassedusersSuccess, fetchquizpassedusersFailure } from "../../../actions/Admin/QuizPassedUserAction";

const ApiQuizPassedUsers = ({ dispatch }) => (next) => async (action) => {
    next(action);

    if (action.type === FETCH_QUIZ_REQUEST_USERS) {

        // Assuming quizid is part of the action's payload

        const quizid = action.payload;
        // debugger

        console.log("API-Quizpassedusers", quizid);

        try {
            const response = await axios.get(`http://localhost:5199/api/QuizReport/QuizReport/passedlearnersReport/${quizid.quizId}!`);

            console.log("QuizPassedUserAction", response.data);

            // debugger
            if (response.status === 200 && response.data.data.length > 0) {

                console.log("FetchQuizPassedUsers", response.data.data);
                dispatch(fetchquizpassedusersSuccess(response.data.data));
            }
            // if (response.status === 200 && response.data.data.length === 0) {
            //     console.log("No one is Passes in this course");
            //     dispatch(fetchCoursesSuccesswithlenghtzero("No one is Passed in this course"))
            // }

            else {
                console.error("No data received from API");
            }
        } catch (error) {
            dispatch(fetchquizpassedusersFailure(error.message));
        }
    }
};

export default ApiQuizPassedUsers;
