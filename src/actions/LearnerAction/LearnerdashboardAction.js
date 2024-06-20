export const FETCH_DASHBOARD_REQUEST = 'FETCH_DASHBOARD_REQUEST';
export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';
export const FETCH_DASHBOARD_FAILURE = 'FETCH_DASHBOARD_FAILURE';

export const FetchDashboardRequest = (data) => ({
    type: FETCH_DASHBOARD_REQUEST,
    payload: data,
})
console.log("dashboardcount", FetchDashboardRequest());

export const FetchDashboardSuccess = (dashboard) => ({
    type: FETCH_DASHBOARD_SUCCESS,
    payload: dashboard,
})

export const FetchDashboardFailure = (error) => ({
    type: FETCH_DASHBOARD_FAILURE,
    payload: error,

})