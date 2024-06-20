import { 
  CREATE_TOPICS_REQUEST,
  CREATE_TOPICS_SUCCESS,
  CREATE_TOPICS_FAILURE,
  CREATE_TOPICS_EXISTS,
  SET_TOPICS_STATUS,

} from '../../../actions/Course/Topic/AddTopicAction';

const initialState = {
  topics: [],
  loading: false,
  error: null,
  isSubmitted: false,
  isExisted:false,
  isError:false,
  isRequesting:false,
};

const addTopicReducer = (state = initialState, action) => {
  switch (action.type) {
      case CREATE_TOPICS_REQUEST:
          return {
              ...state,
              loading: true,
          };
      case CREATE_TOPICS_SUCCESS:

          // console.log('Topic posted in Reducer:', action.payload);
          
          // Add the new topic to the existing topics array
          return {
              ...state,
              loading: false,
              topics: action.payload, // Corrected here
              isSubmitted: true,
              error: null,
          };
      case CREATE_TOPICS_FAILURE:
          return {
              ...state,
              loading: false,
              error: action.payload,
              isError:true,
          };

        case CREATE_TOPICS_EXISTS:
            return {
              ...state,
              loading: false,
              isExisted:true,
              isSubmitted:false,
              isError:false,
             
              
    
            };
            case SET_TOPICS_STATUS:
              return{
                ...state,
                isRequesting:action.payload,
              };
      default:
          return state;
  }
};

export default addTopicReducer;