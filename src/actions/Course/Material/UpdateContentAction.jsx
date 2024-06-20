export const UPDATE_CONTENT_REQUEST = 'UPDATE_CONTENT_REQUEST';
export const UPDATE_CONTENT_SUCCESS = 'UPDATE_CONTENT_SUCCESS';
export const UPDATE_CONTENT_FAILURE = 'UPDATE_CONTENT_FAILURE';
export const UPDATE_CONTENT_EXISTS = 'UPDATE_CONTENT_EXISTS';
  
  
  
  
export const updateContentRequest = (formData) => ({
    type: UPDATE_CONTENT_REQUEST,
   payload: formData,

  });
   
  export const updateContentSuccess = (content) => ({
    type: UPDATE_CONTENT_SUCCESS,
    payload: content,
    
  });
   
  export const updateContentFailure = (error) => ({
    type: UPDATE_CONTENT_FAILURE,
    payload: error,
  });

  export const updateContentExists = () => ({
    type: UPDATE_CONTENT_EXISTS,
    
  });