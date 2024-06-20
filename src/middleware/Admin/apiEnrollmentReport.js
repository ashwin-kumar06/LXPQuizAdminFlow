import axios from "axios";
import {
  FETCH_ENROLLMENTREPORT_REQUEST,
  FetchEnrollmentReportSuccess,
  FetchEnrollmentReportFailure,
} from "../../actions/Admin/CourseEnrollmentReportAction";

import { baseUrl } from "./api";

const API_URL = `${baseUrl}/api/Enrollment/lxp/enrollment/report`;
const ApiViewEnrollmentReport =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === FETCH_ENROLLMENTREPORT_REQUEST) {
      try {
        const response = await axios.get(API_URL);
        console.log("Report RESPONSE", response.data.data);
        dispatch(FetchEnrollmentReportSuccess(response.data.data));
      } catch (error) {
        console.error("API Error:", error.message);
        dispatch(FetchEnrollmentReportFailure(error.message));
      }
    }
    return next(action);
  };

export default ApiViewEnrollmentReport;
