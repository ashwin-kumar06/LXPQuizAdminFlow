export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';
  
  
export const fetchCategoryRequest = (formData) => ({
    type: FETCH_CATEGORY_REQUEST,
    payload: formData
  });
   
export const fetchCategorySuccess = (content) => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: content
    
  });
   
export const fetchCategoryFailure = (error) => ({
    type: FETCH_CATEGORY_FAILURE,
    payload: error
  });