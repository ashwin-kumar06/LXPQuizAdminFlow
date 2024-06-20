export const DELETE_TOPIC_REQUEST = 'DELETE_TOPIC_REQUEST';
export const DELETE_TOPIC_SUCCESS = 'DELETE_TOPIC_SUCCESS';
export const DELETE_TOPIC_FAILURE = 'DELETE_TOPIC_FAILURE';
 
export const deleteTopicrequest = (topic) => ({
  type:DELETE_TOPIC_REQUEST ,
  payload:topic,
  
});
export const deleteTopicsuccess = (response) => ({
  type:DELETE_TOPIC_SUCCESS ,
  payload:response,
  
});
export const deleteTopicfailure = (error) => ({
  type:DELETE_TOPIC_FAILURE ,
  payload:error,
  
});