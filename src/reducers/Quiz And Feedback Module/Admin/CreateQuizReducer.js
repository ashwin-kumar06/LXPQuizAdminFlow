// reducers/CreateQuizReducer.js
// import { SET_QUIZ_DETAILS_FAILURE, SET_QUIZ_DETAILS_REQUEST, SET_QUIZ_DETAILS_SUCCESS } from "../../actions/Quiz And Feedback Module/CreateQuizAction";
import { SET_QUIZ_DETAILS_REQUEST,SET_QUIZ_DETAILS_SUCCESS,SET_QUIZ_DETAILS_FAILURE } from "../../../actions/Quiz And Feedback Module/Admin/CreateQuizAction";
const initialState = {
    quizDetails:[],
    error: null,
    loading: false,
    isSubmitted:false
};


const createQuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUIZ_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SET_QUIZ_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                quizDetails: action.payload,
                isSubmitted:true,
                error: null,
            };

        case SET_QUIZ_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default createQuizReducer