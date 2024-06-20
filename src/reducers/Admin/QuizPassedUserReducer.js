import { FETCH_QUIZ_REQUEST_USERS, FETCH_QUIZ_PASSED_USERS, FETCH_QUIZ_FAILED_USERS, FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO } from "../../actions/Admin/QuizPassedUserAction";



const initialState =
{
    quizpasseduser: [],
    loading: false,
    error: null,
}


const quizPassedUserReducer = (state = initialState, action) => {
    switch (action.type)
     {
        case FETCH_QUIZ_REQUEST_USERS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_QUIZ_PASSED_USERS:
            console.log("FETCH_QUIZ_PASSED_USERS",action.payload);
            return {
                ...state,
                quizpasseduser: action.payload,
                loading: true,
                error: null
            }
        // case FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO:
        //     console.log("FETCH_QUIZ_PASSED_USERS_LENGTH_ZERO",action.payload)
        //     return{
        //         ...state,
        //         message :action.payload,
        //         loading: true,
        //         error: null
        //     }
        case FETCH_QUIZ_FAILED_USERS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            {
                return state
            }
    }
};

export default quizPassedUserReducer;