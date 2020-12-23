import { LOGIN_USER } from "./Types";

export const loginUser = (userData) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: userData,
    });
};
