import { LOGIN_USER, UPLOAD } from "./Types";

export const loginUser = (userData) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: userData,
    });
};

export const uploadForm = (userData) => (dispatch) => {
    dispatch({ type: UPLOAD, payload: userData });
};
