import axios from "axios";
import {FETCH_ENROLLMENTCOURSEBARCHART_REQUEST,fetchEnrollmentcourseBarchartSuccess,fetchEnrollmentcourseBarchartFailure} from '../../actions/Admin/AdminDashboardAction'
import { baseUrl } from "./api";

// const API_URL = `http://localhost:5199/api/Dashboard/GetEnrollmentMonth?year=2024`;

const ApiDashboardEnrollmentcourseBarchart=({dispatch})=>(next)=>async(action)=>{
    if(action.type==FETCH_ENROLLMENTCOURSEBARCHART_REQUEST){
        try{

            const output=action.payload;
            console.log("outputssss",output);
            
            const response=await axios.get(`http://localhost:5199/api/Dashboard/GetEnrollmentMonth?year=${output}`);
            console.log("Barchart:",response.data.data);
            dispatch(fetchEnrollmentcourseBarchartSuccess(response.data.data));
        }
        catch(error){
            console.error('API Error:', error.message);
            dispatch(fetchEnrollmentcourseBarchartFailure(error.message));
        }
    }
    return next(action);
};

export default ApiDashboardEnrollmentcourseBarchart ;

