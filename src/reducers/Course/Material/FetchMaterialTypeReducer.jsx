import { 
   
    FETCH_MATERIALTYPE_REQUEST,
    FETCH_MATERIALTYPE_SUCCESS,
    FETCH_MATERIALTYPE_FAILURE,
  } from '../../../actions/Course/Material/FetchMaterialTypeAction';
  
  const initialState = {
    
    materialtype: [],
    loading: false,
    error: null,
    
  };
  
  const fetchMaterialTypeReducer = (state = initialState, action) => {
    switch (action.type) {
       
      case FETCH_MATERIALTYPE_REQUEST:
        return{
          ...state,
          loading:true,
        };
  
      case FETCH_MATERIALTYPE_SUCCESS:
        // console.log("materialtypereducer",action.payload);
        return{
          ...state,
          materialtype:action.payload,
          loading:false,
        };
      case FETCH_MATERIALTYPE_FAILURE:
        return{
          ...state,
          loading:false,
          error:action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default fetchMaterialTypeReducer;
  