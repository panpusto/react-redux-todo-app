import { combineReducers } from "redux";
import { ADD_TODO } from "./actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }

        default:
            return state;
    }
};

export default combineReducers({
    todos
});