import { UNENROLL_DATA_REQUEST, unenrollSuccess, unenrollFailure } from "../../actions/LearnerAction/UnenrollAction";
import axios from "axios";

const UnenrollCourseApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type === UNENROLL_DATA_REQUEST) {
        try {
            const response = await axios.delete(`http://localhost:5199/api/Enrollment/lxp/enroll/delete/${action.payload}`);


            // http://localhost:5199/lxp/enroll/2ce7b837-ec9b-40d2-aa76-567319c8fc02/course/topic

            console.log('deletelist', response.data);



            dispatch(unenrollSuccess(response.data.data));
            console.log('courselist', response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return next(action)
}

export default UnenrollCourseApi;
