import {FETCH_COURSEREPORT_REQUEST,FETCH_COURSEREPORT_SUCCESS,FETCH_COURSEREPORT_FAILURE} from '../../actions/Admin/CourseReportAction'

const initialstate={
    coursereport:[],
    loading:false,
    error:null,
};
const ViewCoursereportReducers=(state=initialstate,action)=>{
    switch (action.type) {
        case FETCH_COURSEREPORT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COURSEREPORT_SUCCESS:
            console.log("ViewCourseReport", action.payload);
            return {
                ...state,
                loading: false,
                coursereport:action.payload,
                error: null,
            };
        case FETCH_COURSEREPORT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ViewCoursereportReducers;

