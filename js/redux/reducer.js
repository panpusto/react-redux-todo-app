import { combineReducers } from "redux";
import { ADD_TODO, TODO_TOGGLED } from "./actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }

        case TODO_TOGGLED: {
            return state.map(todo => todo === action.payload
                ? {...todo, done: !todo.done}
                : todo
                )
        }

        default:
            return state;
    }
};

export default combineReducers({
    todos
});