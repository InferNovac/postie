import { LOGIN_USER, UPLOAD } from "../actions/Types";

const initalState = {
    user: {},
    upload: {},
};

export default (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: { ...action.payload },
            };
        case UPLOAD:
            return {};
        default:
            return state;
    }
};
