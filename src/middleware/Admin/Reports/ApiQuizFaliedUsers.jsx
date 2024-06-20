import {FETCH_QUIZ_REQUEST_ACTION_USERS,fetchquizfailedusersSuccess,fetchquizfailedusersFailure} from '../../../actions/Admin/QuizFailedUserAction'
import axios from 'axios'


const ApiQuizFailedUsers = ({ dispatch }) => (next) => async (action) => {
    next(action);

    if (action.type === FETCH_QUIZ_REQUEST_ACTION_USERS) {


        const FailedUserQuizId = action.payload;
        // debugger

        console.log("API-QuizFailedusers", FailedUserQuizId);

        try {
            const response = await axios.get(`http://localhost:5199/api/QuizReport/QuizReport/FailedlearnersReport/${FailedUserQuizId.FailedUserQuizId}`);

            console.log("QuizFailedUsersAction", response.data);

            // debugger
            if (response.status === 200 && response.data.data.length > 0) {

                console.log("FetchQuizFailedUsers", response.data.data);
                dispatch(fetchquizfailedusersSuccess(response.data.data));
            }

            else {
                console.error("No data received from API");
            }
        } catch (error) {
            dispatch(fetchquizfailedusersFailure(error.message));
        }
    }
};

export default ApiQuizFailedUsers;
