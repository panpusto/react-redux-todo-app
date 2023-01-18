import React from 'react';
import Filter from './Filter';
import Form from '../containers/Form';

const List = ({items}) => {
    return (
        <div>
            <Filter />
            <Form />
            <div>
            <ul>
                {items.map((item, index) => (
                        <li key={index} >
                            <span>{item.title}</span>
                        </li>
                    ))}
            </ul>
            </div>
        </div>
    );
};

export default List;