import { FETCH_ENROLLMENTREPORT_REQUEST,FETCH_ENROLLMENTREPORT_SUCCESS,FETCH_ENROLLMENTREPORT_FAILURE } from "../../actions/Admin/CourseEnrollmentReportAction";

const initialstate = {
  enrollmentreport: [],
  loading: false,
  error: null,
};

const EnrollmentReportReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ENROLLMENTREPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ENROLLMENTREPORT_SUCCESS:
      return {
        ...state,
        enrollmentreport: action.payload,
        error: null,
      };
    case FETCH_ENROLLMENTREPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default EnrollmentReportReducer;
