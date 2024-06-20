import { FETCH_QUIZREPORT_REQUEST,FETCH_QUIZREPORT_FAILURE,FETCH_QUIZREPORT_SUCCESS } from "../../actions/Admin/QuizReportAction";

const initialstate={
    quizreport:[],
    loading:false,
    error:null,

};

const QuizReportReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_QUIZREPORT_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case FETCH_QUIZREPORT_SUCCESS:
            return{
                ...state,
                quizreport:action.payload,
                error:null,
            };
        case FETCH_QUIZREPORT_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }

};

export default QuizReportReducer;