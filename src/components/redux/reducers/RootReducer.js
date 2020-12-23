import { combineReducers } from "redux";
import UserReducer from "./RecipeReducer";

export default combineReducers({
    user: UserReducer,
});
