import axios from "axios";
import { ENABLE_DISABLE_COURSE_REQUEST, enableDisableCourseFailure, enableDisableCourseSuccess } from "../../actions/Admin/EnableDisableAction";
import { baseUrl } from "./api";

const EnableDisableCourse = ({ dispatch }) => (next) => async (action) => {
    if (action.type === ENABLE_DISABLE_COURSE_REQUEST) {
        const { courseId } = action.payload;
        if (!courseId) {
            console.error('API ERROR: CourseId is undefined');
            dispatch(enableDisableCourseFailure("CourseId is undefined."));
            return next(action);
        }
        const API_URL = `${baseUrl}/lxp/coursestatus`;
        try {
            const response = await axios.put(API_URL, action.payload);
            if (response.status === 200) {
                dispatch(enableDisableCourseSuccess(response.data));
            }
            else {
                console.error("No data received.")
            }
        }
        catch (error) {
            console.error('API ERROR', error.response ? error.response.data.data : error.message);
            dispatch(enableDisableCourseFailure(error.message));
        }
    }
    return next(action);
};
export default EnableDisableCourse;