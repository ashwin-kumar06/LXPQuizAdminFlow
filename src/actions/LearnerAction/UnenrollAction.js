export const UNENROLL_DATA_REQUEST="UNENROLL_DATA_REQUEST"
export const UNENROLL_DATA_SUCCESS="UNENROLL_DATA_SUCCESS"
export const UNENROLL_DATA_FAILURE="UNENROLL_DATA_FAILURE"
 
export const unenrollRequest=(id)=>({
   type:UNENROLL_DATA_REQUEST,
   payload:id
})
 
export const unenrollSuccess=(success)=>({
    type:UNENROLL_DATA_SUCCESS,
    payload:success
 })
 
 export const unenrollFailure=(error)=>({
    type:UNENROLL_DATA_FAILURE,
    payload:error
 })