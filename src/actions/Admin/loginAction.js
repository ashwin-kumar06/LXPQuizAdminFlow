
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_PASSWORD_MESSAGE ='LOGIN_PASSWORD_MESSAGE'
 
export const LOGIN_EMAIL_MESSAGE='LOGIN_EMAIL_MESSAGE'
 
export const loginRequest = (login) =>
({
  type: LOGIN_REQUEST,
  payload: login
 
});
 
 
export const loginSuccessuser = (user) => ({
  type: LOGIN_SUCCESS_USER,
  payload: user
});
 
 
export const loginSuccessadmin = (user) =>
({
  type: LOGIN_SUCCESS_ADMIN,
  payload: user,
 
});
 
 
export const loginPasswordMessage =(passwordmessage)=>
 
(
  {
     type: LOGIN_PASSWORD_MESSAGE,
     payload:passwordmessage,
  }
)
 
export const loginEmaildMessage =(emailmessage)=>
 
(
  {
     type: LOGIN_EMAIL_MESSAGE,
     payload:emailmessage,
  }
)
 
 
export const loginError = (error) =>
({
  type: LOGIN_ERROR,
  payload: error
 
});
 