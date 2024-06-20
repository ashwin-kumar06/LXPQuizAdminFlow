import axios from "axios";
import {
  FORGOTPASSWORD_REQUEST,
  forgotpasswordSuccess,
  forgotpasswordError,
} from "../../actions/Admin/ForgotPasswordAction";
import { baseUrl } from "./api";
import { useNavigate } from "react-router-dom";

const ApiForgotpassword =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    // console.log(action.type);
    if (action.type === FORGOTPASSWORD_REQUEST) {
      console.log("actiontypesforforgotpasswod", action);
      try {
        const response = await axios.put(
          `${baseUrl}/api/UpdatePassword`,
          action.payload
        );
        console.log("UPdate Password:", response.data);
        if (response.data.statusCode === 200) {
          dispatch(forgotpasswordSuccess(response.data));
        }
      } catch (error) {
        dispatch(forgotpasswordError(error.message));
        console.log(error.message);
      }
    }
    return next(action);
  };

export default ApiForgotpassword;
