export const FORGOTPASSWORD_REQUEST=" fORGOTPASSWORD_REQUEST";
export const FORGOTPASSWORD_SUCCESS="fORGOTPASSWORD_SUCCESS";
export const FORGOTPASSWORD_ERROR="fORGOTPASSWORD_ERROR";

export const forgotpasswordrequest=(data)=>(
{
  type:FORGOTPASSWORD_REQUEST,
  payload:data

});


export const forgotpasswordSuccess=(forgotpassword)=>(
  {
    type:FORGOTPASSWORD_SUCCESS,
    payload:forgotpassword
  }
);

export const forgotpasswordError=(error)=>(
{
    type:FORGOTPASSWORD_ERROR,
    payload:error
}
);