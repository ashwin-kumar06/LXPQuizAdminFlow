// ApiDashboardHighestEnrolledCourse.js
import axios from "axios";
import {FETCH_HIGHESTENROLLEDCOURSE_REQUEST,fetchHighestenrolledSuccess,fetchHighestenrolledFailure} from '../../actions/Admin/AdminDashboardAction'
import { baseUrl } from "./api";

 const API_URL = `${baseUrl}/lxp/admin/GetHighestEnrolledCourse`;

const ApiDashboardHighestEnrolledCourse=({dispatch})=>(next)=>async(action)=>{
    if(action.type==FETCH_HIGHESTENROLLEDCOURSE_REQUEST){
        try{
            const response=await axios.get(API_URL);
            console.log("HIGHESTENROLLEDCOURSE",response.data.data);
            dispatch(fetchHighestenrolledSuccess(response.data.data));
        }
        catch(error){
            console.error('API Error:', error.message);
            dispatch(fetchHighestenrolledFailure(error.message));
        }
    }
    return next(action);
};

export default ApiDashboardHighestEnrolledCourse;

