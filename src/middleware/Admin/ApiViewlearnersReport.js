import axios from "axios";
import { FETCH_LEARNERSREPORT_REQUEST, FetchLearnersreportSuccess, FetchLearnersreportFailure } from '../../actions/Admin/LearnersReportAction';
import { baseUrl } from "./api";

// const API_URL = 'http://localhost:5199/lxp/learnerReport';
const API_URL = `${baseUrl}/lxp/learnerReport`;
const ApiViewlearnersReport = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_LEARNERSREPORT_REQUEST) {
        try {
            const response = await axios.get(API_URL);
            console.log("API RESPONSE", response.data.data);
            dispatch(FetchLearnersreportSuccess(response.data.data));
        } catch (error) {
            console.error('API Error:', error.message);
            dispatch(FetchLearnersreportFailure(error.message));
        }
    }
    return next(action);
};

export default ApiViewlearnersReport;
