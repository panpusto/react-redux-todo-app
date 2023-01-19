import React from 'react';
import Filter from './Filter';
import Form from '../containers/Form';

const List = ({items, toggle, remove}) => {

    const styleForDoneElem = {
        textDecoration: 'line-through',
    };

    return (
        <div>
            <Filter />
            <Form />
            <div>
            <ul>
                {items.map((item, index) => (
                        <li key={index} >
                            <span 
                                onClick={() => toggle(item)} 
                                style={item.done ? styleForDoneElem : {}}>{item.title}
                            </span>
                            <button onClick={() => remove(item)}>Delete</button>
                        </li>
                    ))}
            </ul>
            </div>
        </div>
    );
};

export default List;