// reducers/CreateQuizReducer.js
// import { EDIT_QUIZ_DETAILS_FAILURE, EDIT_QUIZ_DETAILS_REQUEST, EDIT_QUIZ_DETAILS_SUCCESS } from "../../actions/Quiz And Feedback Module/EditQuizAction";
import { EDIT_QUIZ_DETAILS_REQUEST,EDIT_QUIZ_DETAILS_SUCCESS,EDIT_QUIZ_DETAILS_FAILURE } from "../../../actions/Quiz And Feedback Module/Admin/EditQuizAction";

const initialState = {
    editQuizDetails:[],
    error: null,
    loading: false,
    isSubmitted:false
};


const editQuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_QUIZ_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case EDIT_QUIZ_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                editQuizDetails: action.payload,
                isSubmitted:true, // Use the payload from the action
                error: null,
            };

        case EDIT_QUIZ_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default editQuizReducer