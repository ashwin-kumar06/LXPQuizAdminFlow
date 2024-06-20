import React, { useEffect, useState } from 'react';
import axios from 'axios';



export const TopicScoreApi = async (LearnerId, TopicId) => {
    try {

        const response = await axios.get(`http://localhost:5199/api/LearnerAttempt/GetScoreByTopicIdAndLearnerId?TopicId=${TopicId}&LearnerId=${LearnerId}`)
        console.log("log", response.data.data);
        return response.data.data;
    }
    catch (error) {
        console.error('error fetching data', error);
    }
};