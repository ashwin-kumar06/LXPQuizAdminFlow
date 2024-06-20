import axios from "axios";
import { FETCH_PROFILECARD_REQUEST, fetchProfileCardFailure, fetchProfileCardSuccess } from "../../actions/Admin/LearnersViewAction";
import { baseUrl } from "./api";

const GetProfileCard = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_PROFILECARD_REQUEST) {
        const { learnerId } = action.payload;
        if (!learnerId) {
            console.error('API ERROR: LearnerId is undefined');
            dispatch(fetchProfileCardFailure("LearnerId is undefined."));
            return next(action);
        }
        const API_URL = `${baseUrl}/lxp/learner/${learnerId}/learnerdetails`;
        try {
            const response = await axios.get(API_URL);
            if (response.status === 200) {
                dispatch(fetchProfileCardSuccess(response.data.data[0]));
            }
            else {
                console.error("No data received.")
            }
        }
        catch (error) {
            console.error('API ERROR', error.response ? error.response.data.data : error.message);
            dispatch(fetchProfileCardFailure(error.message))
        }
    }
    return next(action);
};
export default GetProfileCard;