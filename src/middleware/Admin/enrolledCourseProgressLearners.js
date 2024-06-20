import axios from "axios";
import { baseUrl } from "./api";
import { FETCH_ENROLL_PROGRESS_COURSE_LEARNER_REQUEST, fetchEnrollProgressCourseLearnerFailure, fetchEnrollProgressCourseLearnerSuccess } from "../../actions/Admin/EnrolledCourseProgressLearners";

const EnrollCourseProgressLearner = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_ENROLL_PROGRESS_COURSE_LEARNER_REQUEST) {
        const courseId = action.payload.courseId;
        try {
            const response = await axios.get(`${baseUrl}/api/Enrollment/lxp/enrollment/Inprogress/LearnerList?courseId=${courseId}`);
            if (response.data.statusCode === 200) {
                dispatch(fetchEnrollProgressCourseLearnerSuccess(response.data.data));
            }
        }
        catch (error) {
            dispatch(fetchEnrollProgressCourseLearnerFailure(error))
            console.log(error);
        }
    }
    return next(action)
}

export default EnrollCourseProgressLearner;