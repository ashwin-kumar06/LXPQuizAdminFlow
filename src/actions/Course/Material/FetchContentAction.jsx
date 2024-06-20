export const FETCH_CONTENT_REQUEST ='FETCH_CONTENT_REQUEST';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILURE = 'FETCH_CONTENT_FAILURE';

export const fetchContentRequest=(formData)=>({
    type: FETCH_CONTENT_REQUEST,
    payload:formData
})

export const fetchContentSuccess=(material)=>({
    type: FETCH_CONTENT_SUCCESS,
    payload : material
})

export const fetchContentFailure = (error)=>({
    type: FETCH_CONTENT_FAILURE,
    payload : error
})

