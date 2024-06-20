import axios from 'axios';
import { FETCH_COURSES_TOPICS_SCORES_REQUEST, fetchCoursesTopicsScoresSuccess, fetchCoursesTopicsScoresFailure } from '../../actions/LearnerAction/LearnerScoreProgressBarGraphAction';





const LearnerScoreProgressBarGraphApi = ({ dispatch }) => (next) => async (action) => {
    next(action);
    const API_URL = `http://localhost:5199/api/LearnerAttempt/GetScoreByTopicIdAndLearnerId?LearnerId=${action.payload}`;

    if (action.type === FETCH_COURSES_TOPICS_SCORES_REQUEST) {
        try {
            const response = await axios.get(`${API_URL}`);
            console.log(`${API_URL}${action.payload}`);
            console.log('API Response:', response.data); // Log the response data

            if (response.data) {
                //   const scoreProgress = response.data; // Extract the courses array

                dispatch(fetchCoursesTopicsScoresSuccess(response.data.data));

            } else {
                console.error('No valid data received from API');
                dispatch(fetchCoursesTopicsScoresFailure('No valid data received from API'));
            }
        } catch (error) {
            console.error('API Error:', error.message);
            dispatch(fetchCoursesTopicsScoresFailure(error.message));
        }
    }
};
export default LearnerScoreProgressBarGraphApi;