import axios from "axios";
import {FETCH_COURSEREPORT_REQUEST,FetchCoursereportSuccess,FetchCourereportFailure} from '../../actions/Admin/CourseReportAction'
import { baseUrl } from "./api";

// const API_URL = 'http://localhost:5199/api/Course/GetAllCourse/lxp/GetAllCourse';
const API_URL = `${baseUrl}/api/Course/lxp/GetAllCourse`;
const ApiViewCourseReport=({dispatch})=>(next)=>async(action)=>{

    if(action.type==FETCH_COURSEREPORT_REQUEST){
        try{
            const response=await axios.get(API_URL);
            console.log("Coursereport:",response.data.data);
            dispatch(FetchCoursereportSuccess(response.data.data));
    
        }
        catch(error){
            console.log("API ERROR:",error.message);
            dispatch(FetchCourereportFailure(error.message));
        }
    }
    return next(action);
};

export default ApiViewCourseReport;