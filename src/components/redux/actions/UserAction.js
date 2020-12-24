import { SIGN_UP, LOGIN, UPLOAD } from "./Types";

export const signUp = (userData) => (dispatch) => {
    dispatch({
        type: SIGN_UP,
        payload: userData,
    });
};

export const login = (userData) => (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: userData,
    });
};

export const upload = (userData) => (dispatch) => {
    dispatch({ type: UPLOAD, payload: userData });
};
