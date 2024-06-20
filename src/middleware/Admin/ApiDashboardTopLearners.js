import axios from "axios";
import { FETCH_TOPLEARNERS_REQUEST,fetchToplearnersSuccess,fetchToplearnerFailure } from "../../actions/Admin/AdminDashboardAction";
import { baseUrl } from "./api";

const API_URL = `${baseUrl}/lxp/admin/GetTopLearners`;

const ApiDashboardTopLearners=({dispatch})=>(next)=>async(action)=>{
    if(action.type==FETCH_TOPLEARNERS_REQUEST){
        try{
            const response=await axios.get(API_URL);
            console.log("Top learners",response.data.data);
            dispatch(fetchToplearnersSuccess(response.data.data));
          
        }
        catch(error){
            console.error('API Error:', error.message);
            dispatch(fetchToplearnerFailure(error.message));
        }
    }
    return next(action);
};

export default ApiDashboardTopLearners;