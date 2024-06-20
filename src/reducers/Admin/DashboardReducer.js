import {
    FETCH_COUNT_REQUEST,
    FETCH_COUNT_SUCCESS,
    FETCH_COUNT_FAILURE
} from '../../actions/Admin/AdminDashboardAction'

const initialState = {
  data: [],
  loading: false,
  error: null,
  isNavigate: false,
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNT_REQUEST:
        console.log("reducer", action.payload);
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNT_SUCCESS:
      console.log("FetchDataReducer", action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        isNavigate: true,
      };
    case FETCH_COUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isNavigate: false,
      };

    default:
      return state;
  }
};

export default fetchDataReducer;
