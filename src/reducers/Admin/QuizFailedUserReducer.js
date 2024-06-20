import { FETCH_QUIZ_FAILED_ACTION_USERS,FETCH_QUIZ_REQUEST_ACTION_USERS,FETCH_QUIZ_FAILURE_ACTION_USERS } from "../../actions/Admin/QuizFailedUserAction";



const initialState =
{
    quizfaileduser: [],
    loading: false,
    error: null,
}


const quizFailedUserReducer = (state = initialState, action) => {
    switch (action.type)
     {
        case FETCH_QUIZ_REQUEST_ACTION_USERS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_QUIZ_FAILED_ACTION_USERS:
            console.log("FETCH_QUIZ_FAILED_ACTION_USERS",action.payload);
            return {
                ...state,
                quizfaileduser: action.payload,
                loading: true,
                error: null
            }
        case FETCH_QUIZ_FAILURE_ACTION_USERS :
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

export default quizFailedUserReducer;