import { SIGN_UP, LOGIN, UPLOAD } from "../actions/Types";

const initalState = {
    signUp: {},
    login: {},
    upload: {},
};

export default (state = initalState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                signUp: { ...state.signUp, ...action.payload },
            };
        case LOGIN_USER:
            return {
                ...state,
                login: { ...state.login, ...action.payload },
            };
        case UPLOAD:
            return {
                ...state,
                upload: { ...state.upload, ...action.payload },
            };

        default:
            return state;
    }
};
