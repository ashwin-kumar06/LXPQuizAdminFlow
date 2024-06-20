import axios from "axios";
import { FETCH_LEARNERS_REQUEST, fetchLearnerFailure, fetchLearnerSuccess } from '../../actions/Admin/LearnersViewAction';
import { baseUrl } from "./api";

const API_URL = `${baseUrl}/lxp/learner/getalllearnerdetails`;
// const API_URL = 'http://localhost:3001/ViewAllLearners';

const apiViewAllLearners = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_LEARNERS_REQUEST) {
        try {
            const response = await axios.get(API_URL);

            if (response.status === 200) {
                dispatch(fetchLearnerSuccess(response.data.data));
            }
            else {
                console.error("No data received from API")
            }
        }
        catch (error) {
            console.error('API Error:', error.message);
            dispatch(fetchLearnerFailure(error.message));
        }
    }
    return next(action);
}

export default apiViewAllLearners;