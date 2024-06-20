export const FETCH_INDIVIDUAL_CONTENT_REQUEST = 'FETCH_INDIVIDUAL_CONTENT_REQUEST';
export const FETCH_INDIVIDUAL_CONTENT_SUCCESS = 'FETCH_INDIVIDUAL_CONTENT_SUCCESS';
export const FETCH_INDIVIDUAL_CONTENT_FAILURE = 'FETCH_INDIVIDUAL_CONTENT_FAILURE';
  
  
export const fetchIndividualContentRequest = (formData) => ({
    type: FETCH_INDIVIDUAL_CONTENT_REQUEST,
    payload: formData
  });
   
export const fetchIndividualContentSuccess = (content) => ({
    type: FETCH_INDIVIDUAL_CONTENT_SUCCESS,
    payload: content
    
  });
   
export const fetchIndividualContentFailure = (error) => ({
    type: FETCH_INDIVIDUAL_CONTENT_FAILURE,
    payload: error
  });