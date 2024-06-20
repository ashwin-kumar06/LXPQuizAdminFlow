import { FETCH_LEARNER_PROGRESS_REQUEST, FetchLearnerProgressSucess, FetchLearnerProgressFailure } from "../../actions/LearnerAction/FetchLearnerProgressAction";

import axios from 'axios';

import { userData } from './/..//..//../src/components/LearnerComponent/Register';
import { useState } from 'react';

// const BASE_URL = 'http://localhost:5199/lxp/view/learner/ ';

const LearnerProgressApi = async (learnerId, enrollmentId) => {

    try {
        console.log("progress", learnerId, enrollmentId);
        const response = await axios.get(`http://localhost:5199/api/LearnerProgress/course-completion-percentage/${learnerId}/${enrollmentId}`);
        console.log("learnerprogress", response.data);
        return response.data;
    } catch (error) {
    }
}

export default LearnerProgressApi;