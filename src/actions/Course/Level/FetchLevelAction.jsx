export const FETCH_LEVEL_REQUEST = 'FETCH_LEVEL_REQUEST';
export const FETCH_LEVEL_SUCCESS = 'FETCH_LEVEL_SUCCESS';
export const FETCH_LEVEL_FAILURE = 'FETCH_LEVEL_FAILURE';
  
  
export const fetchLevelRequest = (formData) => ({
    type: FETCH_LEVEL_REQUEST,
    payload: formData
  });
   
export const fetchLevelSuccess = (content) => ({
    type: FETCH_LEVEL_SUCCESS,
    payload: content
    
  });
   
export const fetchLevelFailure = (error) => ({
    type: FETCH_LEVEL_FAILURE,
    payload: error
  });