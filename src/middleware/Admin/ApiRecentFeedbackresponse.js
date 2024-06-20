// ApiDashboardHighestEnrolledCourse.js
import axios from "axios";
import {FETCH_RECENTFEEDBACKRESPONSE_REQUEST,fetchRecentFeedbackResponseSuccess,fetchRecentFeedbackResponseFailure} from '../../actions/Admin/AdminDashboardAction'
import { baseUrl } from "./api";

 const API_URL = `${baseUrl}/lxp/admin/GetRecentfeedbackResponses`;

const ApiRecentFeedbackresponse=({dispatch})=>(next)=>async(action)=>{
    if(action.type==FETCH_RECENTFEEDBACKRESPONSE_REQUEST){
        try{
            const response=await axios.get(API_URL);
            console.log("Recent feedback",response.data.data);
            dispatch(fetchRecentFeedbackResponseSuccess(response.data.data));
        }
        catch(error){
            console.error('API Error:', error.message);
            dispatch(fetchRecentFeedbackResponseFailure(error.message));
        }
    }
    return next(action);
};

export default ApiRecentFeedbackresponse;

