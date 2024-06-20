import axios from 'axios';
import { FETCH_COURSESCORE_REQUEST, fetchCourseScoreFailure, fetchCourseScoreSuccess } from '../../actions/LearnerAction/CoursebyScoreAction';



export const CoursebyScoreApi = ({ dispatch }) => (next) => async (action) => {
    next(action)

    if (action.type === FETCH_COURSESCORE_REQUEST) {

        try {
            const response = await axios.get(`http://localhost:5199/api/LearnerAttempt/GetScoreByLearnerId?LearnerId=${action.payload}`);

            console.log("console-log", response.data.data);

            dispatch(fetchCourseScoreSuccess(response.data.data));
            // console.log("dispatch-checker", dispatch(fetchCourseScoreSuccess(response.data.data)))

        }
        catch (error) {

            dispatch(fetchCourseScoreFailure(error))
        }
    }

}