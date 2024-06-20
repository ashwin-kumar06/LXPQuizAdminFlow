export const DELETE_CONTENT_REQUEST = 'DELETE_CONTENT_REQUEST';
export const DELETE_CONTENT_SUCCESS = 'DELETE_CONTENT_SUCCESS';
export const DELETE_CONTENT_FAILURE = 'DELETE_CONTENT_FAILURE';
  
  
  
  
export const deleteContentRequest = (formData) => ({
    type: DELETE_CONTENT_REQUEST,
    payload: formData
    
  });
   
  export const deleteContentSuccess = (content) => ({
    type: DELETE_CONTENT_SUCCESS,
    payload: content,
    
  });
   
  export const deleteContentFailure = (error) => ({
    type: DELETE_CONTENT_FAILURE,
    payload: error,
  });