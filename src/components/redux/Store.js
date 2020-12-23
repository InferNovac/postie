import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const initalState = {};
const middleWare = [thunk];
const Store = createStore(
    RootReducer,
    initalState,
    applyMiddleware(...middleWare)
);

export default Store;
