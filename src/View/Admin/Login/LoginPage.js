import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import '../../../Styles/Admin/Loginpage.css';
import Relevantz from '../../../assets/Admin/Images/Relevantz.png'
import loginUser from '../../../middleware/Admin/apiLogin'
import { Link } from 'react-router-dom';
import { emailRegex, passwordRegex, validationMessages } from '../../../utils/Admin/Validation';
import { loginRequest, loginPasswordMessage, loginEmaildMessage } from '../../../actions/Admin/loginAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const Loginpage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const isSuccessadmin = useSelector((state) => state.user.isSuccessadmin);

  const isSuccessuser = useSelector((state) => state.user.isSuccessuser)

  const [altermessage, setAlertmessage] = useState(false);


  // Handle the function for the navigation

  const handlnavigation = (path) => {
    setAlertmessage(true);

    const timer = setTimeout(() => {
      setAlertmessage(false)
      navigate(path);
    }, 1000);

    return () => clearTimeout(timer);
  }


  // useEffect(() => {
  //   if (isSuccessadmin) {
  //     handlnavigation('/admindashboard'); // Navigate to the next page on success
  //   }
  // }, [isSuccessadmin]);


  useEffect(() => {
    if (isSuccessuser) {
      handlnavigation('/LearnerDashboard'); // Navigate to the next page on success
    }
  }, [isSuccessuser]);



  const [passwordfailuremessage, setpasswordfailureAlertmessage] = useState(false)

  const isPasswordMessage = useSelector((state) => state.user.failuremessage);

  console.log("passwordmessage", isPasswordMessage);

  useEffect(() => {
    let timer;
    if (isSuccessadmin) {
      setAlertmessage(true);
      timer = setTimeout(() => {
        setAlertmessage(false);
        navigate('/admindashboard');
      }, 2000);
    }
    return () => clearTimeout(timer);

  }, [isSuccessadmin, navigate]);



  useEffect(() => {
    let times;
    if (isPasswordMessage) {
      setpasswordfailureAlertmessage(true);
      times = setTimeout(() => {
        setpasswordfailureAlertmessage(false);
        const data = "invalid password";
        dispatch(loginPasswordMessage(data));
      }, 2000);
    }
    return () => clearTimeout(times);
  }, [isPasswordMessage]);


  // Email Faliliure Messare

  const isEmailfailuremessage = useSelector((state) => state.user.emailfailuremessage)

  console.log("emailmessage", isEmailfailuremessage);


  const [emailfailurealertmessage, setEmailfailurealertmessage] = useState(false);


  useEffect(() => {
    let emailmessgeclosingtime;

    if (isEmailfailuremessage) {
      setEmailfailurealertmessage(true);

      emailmessgeclosingtime = setTimeout(() => {
        setEmailfailurealertmessage(false);
      }, 2000);



    }
    return () => clearTimeout(emailmessgeclosingtime)
  }, [isEmailfailuremessage]);



  const onSubmit = data => {
    dispatch(loginRequest(data));
  };


  return (
    <>
      <div className='login-app'>
        <div className='login-container'>
          <div className="loginform-container">
            <div className="login-header">
              <img src={Relevantz} alt="Logo" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {altermessage && <Alert variant="outlined" severity="success">
                  Login successful! Redirecting...
                </Alert>}
                {
                  passwordfailuremessage && <Alert variant="outlined" severity="error">
                    Incorrect Passwod
                  </Alert>
                }
                {
                  emailfailurealertmessage && <Alert variant="outlined" severity="error">
                    Incorrect Email
                  </Alert>
                }


              </div>
              <div style={{ marginTop: '5px' }}>

                <input
                  {...register('email', {
                    required: validationMessages.email.required,
                    pattern: {
                      value: emailRegex,
                      message: validationMessages.email.pattern
                    }
                  })}
                  type='text'
                  placeholder='Email'
                />
              </div>
              <p>{errors.email?.message}</p>
              <div>
                <input
                  {...register('password', {
                    required: validationMessages.password.required,
                    minLength: {
                      value: 14,
                      message: validationMessages.password.minLength
                    },
                    pattern: {
                      value: passwordRegex,
                      message: validationMessages.password.pattern
                    }
                  })}
                  type='password'
                  placeholder='Password'
                />
                <p>{errors.password?.message}</p>
              </div>

              <div className='button-login' style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center"
              }}>
                <button className='btn' >Login</button>
              </div>
              {/* <div style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "left"
              }}>
                <Link to={'/RegisterView'} style={{ alignItems: "right", textDecoration: "none" }} >New User? <br></br>Register here...</Link>
              </div> */}
              <div style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Link to={'/RegisterView'} style={{ textDecoration: "none" }} >New User? <br></br>Register here...</Link>
                <Link to={'/email'} style={{ textDecoration: 'none' }} >Forgot password? </Link>
              </div>

            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default Loginpage;
