import axios from "axios";
import { FETCH_ENROLL_COURSE_LEARNER_FAILURE, FETCH_ENROLL_COURSE_LEARNER_REQUEST, FETCH_ENROLL_COURSE_LEARNER_SUCCESS, fetchEnrollCourseLearnerFailure, fetchEnrollCourseLearnerSuccess } from "../../actions/Admin/EnrollmentCourseLearners"
import { baseUrl } from "./api";

const EnrollCourseLearners = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_ENROLL_COURSE_LEARNER_REQUEST) {
        const courseId = action.payload.courseId;
        try {
            const response = await axios.get(`${baseUrl}/api/Enrollment/lxp/enrollment/course/${courseId}`);
            if (response.data.statusCode === 200) {
                dispatch(fetchEnrollCourseLearnerSuccess(response.data.data));
            }

        }
        catch (error) {
            dispatch(fetchEnrollCourseLearnerFailure(error))
            console.log(error);
        }
    }
    return next(action)
}

export default EnrollCourseLearners;