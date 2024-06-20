export const FETCH_COURSEREPORT_REQUEST = 'FETCH_COURSEREPORT_REQUEST';
export const FETCH_COURSEREPORT_SUCCESS = 'FETCH_COURSEREPORT_SUCCESS';
export const FETCH_COURSEREPORT_FAILURE = 'FETCH_COURSEREPORT_FAILURE';

export const FetchCoursereportRequest = () => ({
    type: FETCH_COURSEREPORT_REQUEST,
});

export const FetchCoursereportSuccess = (coursereport) => ({
    type: FETCH_COURSEREPORT_SUCCESS,
    payload: coursereport,
});

export const FetchCourereportFailure = (error) => ({
    type: FETCH_COURSEREPORT_FAILURE,
    payload: error,
});
