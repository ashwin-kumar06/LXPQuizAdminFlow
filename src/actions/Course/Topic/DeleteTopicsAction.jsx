export const DELETE_TOPICS_REQUEST = 'DELETE_TOPICS_REQUEST';
export const DELETE_TOPICS_SUCCESS = 'DELETE_TOPICS_SUCCESS';
export const DELETE_TOPICS_FAILURE = 'DELETE_TOPICS_FAILURE';
  
  
  
  
export const deleteTopicsRequest = (formData) => ({
    type: DELETE_TOPICS_REQUEST,
    payload: formData
    
  });
   
  export const deleteTopicsSuccess = (topicId) => ({
    type: DELETE_TOPICS_SUCCESS,
    payload: topicId,
    
  });
   
  export const deleteTopicsFailure = (error) => ({
    type: DELETE_TOPICS_FAILURE,
    payload: error,
  });