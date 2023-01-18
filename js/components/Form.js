import React from 'react';

const Form = ({addToDo}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({
            title: e.target.todoName.value,
            done: false
        });
        e.target.todoName.value = '';
    }
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                 <input type="text" id="todoName" name="todoName" />
                 <button type="submit">Add</button>
             </form>
         </div>
    );
};

export default Form;