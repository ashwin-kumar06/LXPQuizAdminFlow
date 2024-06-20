export const CREATE_CATEGORY_REQUEST = 'CREATE_CATEGORY_REQUEST';
export const CREATE_CATEGORY_SUCCESS='CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE='CREATE_CATEGORY_FAILURE';
export const CREATE_CATEGORY_INTERNALFAILURE='CREATE_CATEGORY_INTERNALFAILURE';
 
export const createCategoryrequest = (category) => ({
  type:CREATE_CATEGORY_REQUEST ,
  payload:category,
  
});

export const createCategorysuccess=(category)=>({
  type:CREATE_CATEGORY_SUCCESS,
  payload:category,
})

export const createCategoryfailure=()=>({
  type:CREATE_CATEGORY_FAILURE,
  
})

export const createCategoryInternalfailure=()=>({
  type:CREATE_CATEGORY_INTERNALFAILURE,
})