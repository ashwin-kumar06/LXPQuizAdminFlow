export const EMAIL_REQUEST = 'EMAIL_REQUEST';
export const EMAIL_SUCCESS= 'EMAIL_SUCCESS';
export const EMAIL_ERROR = 'EMAIL_ERROR';

export const emailRequest = (emailrequest) =>
({
  type: EMAIL_REQUEST,
  payload: emailrequest
});

export const emailSuccess = (email) => ({
  type: EMAIL_SUCCESS,
  payload: email
});

export const emailError = (error) =>
({
  type: EMAIL_ERROR,
  payload: error

});

