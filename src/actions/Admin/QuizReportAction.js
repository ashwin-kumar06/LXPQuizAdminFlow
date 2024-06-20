export const FETCH_QUIZREPORT_REQUEST = 'FETCH_QUIZREPORT_REQUEST';
export const FETCH_QUIZREPORT_SUCCESS = 'FETCH_QUIZREPORT_SUCCESS';
export const FETCH_QUIZREPORT_FAILURE = 'FETCH_QUIZREPORT_FAILURE';

export const FetchQuizereportRequest = () => ({
    type: FETCH_QUIZREPORT_REQUEST,
});

export const FetchQuizreportSuccess = (quizreport) => ({
    type: FETCH_QUIZREPORT_SUCCESS,
    payload: quizreport,
});

export const FetchQuizreportFailure = (error) => ({
    type: FETCH_QUIZREPORT_FAILURE,
    payload: error,
});
