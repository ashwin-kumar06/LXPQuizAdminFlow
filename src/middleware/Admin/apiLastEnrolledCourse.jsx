import axios from "axios";
import { FETCH_LAST_ENROLLED_COURSE_REQUEST, fetchLastEnrolledCourseFailure, fetchLastEnrolledCourseSuccess } from "../../actions/Admin/LearnersViewAction";
import { baseUrl } from "./api";


const LastEnrolledCourse = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_LAST_ENROLLED_COURSE_REQUEST) {
        const { learnerId } = action.payload;
        if (!learnerId) {
            console.error('API Error: LearnerId is undefined');
            dispatch(fetchLastEnrolledCourseFailure("LearnerId is undefined"));
            return next(action);
        }
        const API_URL = `${baseUrl}/lxp/learner/${learnerId}/entrolledcourse`
        try {
            const response = await axios.get(API_URL);
            if (response.status === 200) {
                dispatch(fetchLastEnrolledCourseSuccess(response.data.data[0]));
            }
            else {
                console.error("No Data received");
            }
        }

        catch (error) {
            console.error('API ERROR', error.response ? error.response.data.data : error.message);
            dispatch(fetchLastEnrolledCourseFailure(error.message));
        }
    }
    return next(action);
};

export default LastEnrolledCourse;