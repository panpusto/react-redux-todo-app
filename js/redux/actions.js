const ADD_TODO = 'ADD_TODO';
const TODO_TOGGLED = 'TODO_TOGGLED';

const add = (element) => {
    return {
        type: ADD_TODO,
        payload: element
    }
};

const toggle = (element) => {
    return {
        type: TODO_TOGGLED,
        payload: element
    }
};


export {
    ADD_TODO,
    TODO_TOGGLED,
    add,
    toggle,
};