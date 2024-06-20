export const FETCH_TOPICS_REQUEST = 'FETCH_TOPICS_REQUEST';
export const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS';
export const FETCH_TOPICS_FAILURE = 'FETCH_TOPICS_FAILURE';
  
  
  
  
export const fetchTopicsRequest = (formData) => ({
    type: FETCH_TOPICS_REQUEST,
   payload: formData
    
  });
   
  export const fetchTopicsSuccess = (topics) => ({
    type: FETCH_TOPICS_SUCCESS,
    payload: topics,
    
  });
   
  export const fetchTopicsFailure = (error) => ({
    type: FETCH_TOPICS_FAILURE,
    payload: error,
  });