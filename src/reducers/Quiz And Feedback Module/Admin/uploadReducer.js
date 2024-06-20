import { UPLOAD_FILES } from '../actions/uploadActions';

const initialState = {
  files: undefined
};

const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILES:
      return {
        ...state,
        files: action.payload
      };
    default:
      return state;
  }
};

export default uploadReducer;
