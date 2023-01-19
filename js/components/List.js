import React from 'react';
import Filter from './Filter';
import Form from '../containers/Form';

const List = ({items, filter,  toggle, remove, asyncRemove}) => {

    const styleForDoneElem = {
        textDecoration: 'line-through',
    };

    return (
        <div>
            <Filter filter={filter} />
            <Form />
            <div>
            <ul className='list-group'>
                {items.map((item, index) => (
                        <li 
                            className='list-group-item d-flex justify-content-between align-items-center' 
                            key={index} >
                            <span 
                                onClick={() => toggle(item)} 
                                style={item.done ? styleForDoneElem : {}}>{item.title}
                            </span>
                            <div className='btn-group'>
                                <button 
                                    className='btn btn-danger btn-sm' 
                                    onClick={() => remove(item)}>
                                        Delete
                                </button>
                                <button 
                                    className='btn btn-danger btn-sm' 
                                    onClick={() => asyncRemove(item)}>
                                        Delete after 2 sec
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>
            </div>
        </div>
    );
};

export default List;