import { FETCH_PROFILECARD_FAILURE, FETCH_PROFILECARD_REQUEST, FETCH_PROFILECARD_SUCCESS, fetchLearnerSuccess } from "../../actions/Admin/LearnersViewAction"

const initialState = {
    profilecard: {},
    loading: false,
    error: null,
}

const ProfileCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILECARD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PROFILECARD_SUCCESS:
            return {
                ...state,
                loading: false,
                profilecard: action.payload,
                error: null,
            }
        case FETCH_PROFILECARD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};
export default ProfileCardReducer;