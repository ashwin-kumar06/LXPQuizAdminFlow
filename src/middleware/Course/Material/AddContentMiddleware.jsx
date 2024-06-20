import { CREATE_CONTENT_REQUEST, SET_CONTENT_STATUS, createContentSuccess, createContentFailure, createContentExists } from "../../../actions/Course/Material/AddContentAction";
import axios from "axios";
const API_URL = 'http://localhost:5199/lxp/course/material';

const addContent = ({ dispatch, getState }) => (next) => async (action) => {
    if (action.type === CREATE_CONTENT_REQUEST) {
        console.log("materialaddisRequesting", getState().addContent);
        const ReducerContentData = getState().addContent;
        if (!ReducerContentData.isRequesting) {
            dispatch({ type: SET_CONTENT_STATUS, payload: true });
        
        try {
            console.log("Content posting data : ", action.payload);
            const response = await axios.post(API_URL, action.payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("ADD CONTENT :",response.data);
            if (response.data.statusCode == 412) {
                dispatch(createContentExists());
            }
            else {
                dispatch(createContentSuccess(response.data));
                return next(action);
             } }
        catch (error) {
            console.error('API Error:', error.message)
            dispatch(createContentFailure(error.message))
        } finally {
            dispatch({ type: SET_CONTENT_STATUS, payload: false })
        }
    }
    }
    return next(action);
};

export default addContent;