const ADD_TODO = 'ADD_TODO';

const add = (element) => {
    return {
        type: ADD_TODO,
        payload: element
    }
};

export {
    ADD_TODO,
    add
};