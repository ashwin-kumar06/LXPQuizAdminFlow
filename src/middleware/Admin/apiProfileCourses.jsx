import axios from "axios";
import { FETCH_PROFILECOURSES_REQUEST, fetchProfileCoursesFailure, fetchProfileCoursesSuccess } from "../../actions/Admin/LearnersViewAction";
import { baseUrl } from "./api";

const GetProfileCourses = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_PROFILECOURSES_REQUEST) {
        const { learnerId } = action.payload;
        if (!learnerId) {
            console.error('API Error: LearnerId is undefined');
            dispatch(fetchProfileCoursesFailure("LearnerId is undefined"));
            return next(action);
        }
        const API_URL = `${baseUrl}/lxp/learner/${learnerId}/entrolledcourse`
        try {
            const response = await axios.get(API_URL);
            if (response.status === 200) {
                dispatch(fetchProfileCoursesSuccess(response.data.data));
            }
            else {
                console.error("No Data received");
            }
        }

        catch (error) {
            console.error('API ERROR', error.response ? error.response.data.data : error.message);
            dispatch(fetchProfileCoursesFailure(error.message));
        }
    }
    return next(action);
};

export default GetProfileCourses;