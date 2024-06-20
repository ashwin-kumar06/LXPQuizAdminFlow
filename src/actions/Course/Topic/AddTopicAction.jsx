export const CREATE_TOPICS_REQUEST='CREATE_TOPICS_REQUEST';
export const CREATE_TOPICS_SUCCESS='CREATE_TOPICS_SUCCESS';
export const CREATE_TOPICS_FAILURE='CREATE_TOPICS_FAILURE';
export const CREATE_TOPICS_EXISTS='CREATE_TOPICS_EXISTS';
export const SET_TOPICS_STATUS='SET_TOPICS_STATUS';


export const createTopicsRequest=(formData)=>({
    type:CREATE_TOPICS_REQUEST,
    payload:formData
});

export const createTopicsSuccess=(topics)=>({
    type:CREATE_TOPICS_SUCCESS,
    payload:topics
});

export const createTopicsFailure=(error)=>({
    type:CREATE_TOPICS_FAILURE,
    payload:error
});
export const createTopicsExists=()=>({
    type:CREATE_TOPICS_EXISTS,
  });

export const setTopicsStatus = (isRequesting) => ({
    type: SET_TOPICS_STATUS,
    payload: isRequesting,
  });
  
