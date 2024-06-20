export const FETCH_LEARNER_PROGRESS_REQUEST = 'FETCH_LEARNER_PROGRESS_REQUEST';
export const FETCH_LEARNER_PROGRESS_SUCCESS = 'FETCH_LEARNER_PROGRESS_SUCCESS';
export const FETCH_LEARNER_PROGRESS_FAILURE = 'FETCH_LEARNER_PROGRESS_FAILURE';

export const FetchLearnerProgressRequest = (progressdata, learnerprogress) => ({
    type: FETCH_LEARNER_PROGRESS_REQUEST,
    payload: progressdata, learnerprogress
})


export const FetchLearnerProgressSucess = (LearnerProgress) => ({
    type: FETCH_LEARNER_PROGRESS_SUCCESS,
    payload: LearnerProgress,
})

export const FetchLearnerProgressFailure = (error) => ({
    type: FETCH_LEARNER_PROGRESS_FAILURE,
    payload: error,
})