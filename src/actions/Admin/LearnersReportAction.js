
export const FETCH_LEARNERSREPORT_REQUEST = 'FETCH_LEARNERSREPORT_REQUEST';
export const FETCH_LEARNERSREPORT_SUCCESS = 'FETCH_LEARNERSREPORT_SUCCESS';
export const FETCH_LEARNERSREPORT_FAILURE = 'FETCH_LEARNERSREPORT_FAILURE';

export const FetchLearnersreportRequest = () => ({
    type: FETCH_LEARNERSREPORT_REQUEST,
});

export const FetchLearnersreportSuccess = (reports) => ({
    type: FETCH_LEARNERSREPORT_SUCCESS,
    payload: reports,
});


export const FetchLearnersreportFailure = (error) => ({
    type: FETCH_LEARNERSREPORT_FAILURE,
    payload: error,
});
