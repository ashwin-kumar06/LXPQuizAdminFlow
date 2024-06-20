export const CREATE_CONTENT_REQUEST ='CREATE_CONTENT_REQUEST';
export const CREATE_CONTENT_SUCCESS = 'CREATE_CONTENT_SUCCESS';
export const CREATE_CONTENT_FAILURE = 'CREATE_CONTENT_FAILURE';
export const CREATE_CONTENT_EXISTS='CREATE_COURSES_EXISTS';
export const SET_CONTENT_STATUS='SET_CONTENT_STATUS';

export const createContentRequest=(formData)=>({
    type: CREATE_CONTENT_REQUEST,
    payload : formData
});

export const createContentSuccess=(content)=>({
    type: CREATE_CONTENT_SUCCESS,
    payload : content
});

export const createContentFailure = (error)=>({
    type: CREATE_CONTENT_FAILURE,
    payload : error
});

export const createContentExists=()=>({
    type:CREATE_CONTENT_EXISTS,
  });

export const setContentStatus=(isRequesting)=>({
    type:SET_CONTENT_STATUS,
    payload:isRequesting,
})

