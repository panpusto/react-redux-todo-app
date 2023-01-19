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
             <form className='form-inline' onSubmit={handleSubmit}>
                <div className='form-group mx-sm-3 mb-2'>
                    <input 
                        type="text" 
                        id="todoName" 
                        name="todoName" 
                        placeholder='Task name' 
                        className='form-control'
                    />
                </div>
                <button 
                    type="submit" 
                    className='btn btn-primary mb-2'>
                        Add
                </button>
             </form>
         </div>
    );
};

export default Form;