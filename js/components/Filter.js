import React from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>All</Link></li>
                <li><Link to='/done'>Done</Link></li>
                <li><Link to='/not-done'>Not Done</Link></li>
            </ul>
        </div>
    );
};

export default Filter;