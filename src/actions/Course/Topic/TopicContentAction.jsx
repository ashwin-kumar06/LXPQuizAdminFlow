export const CREATE_TOPIC_REQUEST = 'CREATE_TOPIC_REQUEST';
export const CREATE_TOPIC_SUCCESS = 'CREATE_TOPIC_SUCCESS';
export const CREATE_TOPIC_FAILURE = 'CREATE_TOPIC_FAILURE';
 
export const createTopicrequest = (topic) => ({
  type:CREATE_TOPIC_REQUEST ,
  payload:topic,
  
});
export const createTopicsuccess = (response) => ({
  type:CREATE_TOPIC_SUCCESS ,
  payload:response,
  
});
export const createTopicfailure = (error) => ({
  type:CREATE_TOPIC_FAILURE ,
  payload:error,
  
});