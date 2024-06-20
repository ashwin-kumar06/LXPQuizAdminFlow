export const FETCH_ENROLLMENTREPORT_REQUEST = "FETCH_ENROLLMENTREPORT_REQUEST";
export const FETCH_ENROLLMENTREPORT_SUCCESS = "FETCH_ENROLLMENTREPORT_SUCCESS";
export const FETCH_ENROLLMENTREPORT_FAILURE = "FETCH_ENROLLMENTREPORT_FAILURE";

export const FetchEnrollmentReportRequest = () => ({
  type: FETCH_ENROLLMENTREPORT_REQUEST,
});

export const FetchEnrollmentReportSuccess = (enrollmentreport) => ({
  type: FETCH_ENROLLMENTREPORT_SUCCESS,
  payload: enrollmentreport,
});

export const FetchEnrollmentReportFailure = (error) => ({
  type: FETCH_ENROLLMENTREPORT_FAILURE,
  payload: error,
});
