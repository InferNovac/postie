import { LOGIN_USER } from "../actions/Types";

const initalState = {
    userData: {},
};

export default (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userData: { ...action.payload },
            };
        default:
            return state;
    }
};
