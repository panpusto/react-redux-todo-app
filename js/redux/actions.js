const ADD_TODO = 'ADD_TODO';
const TODO_TOGGLED = 'TODO_TOGGLED';
const TODO_REMOVED = 'TODO_REMOVED';

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

const remove = (element) => {
    return {
        type: TODO_REMOVED,
        payload: element
    }
};

const removeAter2Sec = (element) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(remove(element))
        }, 2000)
    }
};


export {
    ADD_TODO,
    TODO_TOGGLED,
    TODO_REMOVED,
    add,
    toggle,
    remove,
    removeAter2Sec,
};