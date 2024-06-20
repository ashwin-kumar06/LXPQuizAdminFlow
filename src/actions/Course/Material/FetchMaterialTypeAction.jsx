export const FETCH_MATERIALTYPE_REQUEST ='FETCH_MATERIALTYPE_REQUEST';
export const FETCH_MATERIALTYPE_SUCCESS = 'FETCH_MATERIALTYPE_SUCCESS';
export const FETCH_MATERIALTYPE_FAILURE = 'FETCH_MATERIALTYPE_FAILURE';

export const fetchMaterialTypeRequest=()=>({
    type: FETCH_MATERIALTYPE_REQUEST,
})

export const fetchMaterialTypeSuccess=(materialtype)=>({
    type: FETCH_MATERIALTYPE_SUCCESS,
    payload : materialtype
})

export const fetchMaterialTypeFailure = (error)=>({
    type: FETCH_MATERIALTYPE_FAILURE,
    payload : error
})

