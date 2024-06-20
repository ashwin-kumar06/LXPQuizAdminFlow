import axios from "axios";
import { baseUrl } from "./api";
import { FETCH_ENROLL_PASS_COURSE_LEARNER_REQUEST, fetchEnrollPassCourseLearnerFailure, fetchEnrollPassCourseLearnerSuccess } from "../../actions/Admin/EnrolledCoursePassedLearners";

const EnrollCoursePassedLearner = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_ENROLL_PASS_COURSE_LEARNER_REQUEST) {
        const courseId = action.payload.courseId;
        try {
            const response = await axios.get(`${baseUrl}/api/Enrollment/lxp/enrollment/Completed/LearnerList?courseId=${courseId}`);
            if (response.data.statusCode === 200) {

                dispatch(fetchEnrollPassCourseLearnerSuccess(response.data.data));
            }
        }
        catch (error) {
            dispatch(fetchEnrollPassCourseLearnerFailure(error))
            console.log(error);
        }
    }
    return next(action)
}

export default EnrollCoursePassedLearner;