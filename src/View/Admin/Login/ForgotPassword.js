import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  emailRegex,
  passwordRegex,
  validationMessages,
  receivedPasswordRegex,
} from "../../../utils/Admin/Validation";
import { useDispatch, useSelector } from "react-redux";
import { forgotpasswordrequest } from "../../../actions/Admin/ForgotPasswordAction";
import Relevantz from "../../../assets/Admin/Images/Relevantz.png";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const email = location.state?.email || "";
  console.log("verify", email.email);
  const isSuccessForgotpassword = useSelector(
    (state) => state.forgotPassword.issuccessforgotpassword
  );
  useEffect(() => {
    if (isSuccessForgotpassword) {
      navigate("/");
    }
  }, [isSuccessForgotpassword, navigate]);
  // const location = useLocation();

  // const email = location.state?.email || '';
  const onSubmit = (data) => {
    console.log(data);
    dispatch(forgotpasswordrequest(data));
    window.location.href = "/";
    console.log("called...", data);
  };
  return (
    <div className="login-app">
      <div className="login-container">
        <div className="loginform-container">
          <div className="login-header">
            <img src={Relevantz} alt="Logo" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register("email", {
                  required: validationMessages.email.required,
                  pattern: {
                    value: emailRegex,
                    message: validationMessages.email.pattern,
                  },
                })}
                type="text"
                placeholder="Email"
                value={email.email}
                readOnly
              />
            </div>
            <p className='errormessgae'>{errors.email?.message}</p>
            <div>
              <input
                {...register("oldPassword", {
                  required: validationMessages.password.required,
                  minLength: {
                    value: 6,
                    message: validationMessages.password.receivePassword,
                  },
                  pattern: {
                    value: receivedPasswordRegex,
                    message: validationMessages.password.receivePattern,
                  },
                })}
                type="password"
                placeholder="Received Password"
              />
            </div>
            <p className='errormessgae'>{errors.oldPassword?.message}</p>
            <div>
              <input
                {...register("newPassword", {
                  required: validationMessages.password.required,
                  minLength: {
                    value: 6,
                    message: validationMessages.password.minLength,
                  },
                  pattern: {
                    value: passwordRegex,
                    message: validationMessages.password.pattern,
                  },
                })}
                type="password"
                placeholder="New Password"
              />
            </div>
            <p className='errormessgae'>{errors.newPassword?.message}</p>
            <div className="button-login">
              <button className="btn">Update password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
