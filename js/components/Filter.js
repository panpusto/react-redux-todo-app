import React from 'react';
import { Link } from 'react-router-dom';
import reducer from '../redux/reducer';

const Filter = ({filter}) => {

    const chosenFilterStyle = {
        color: 'red',
        fontWeight: 'bold'
    };

    const routes = {
        '/': 'All',
        '/done': 'Done',
        '/not-done': 'Not Done'
    };

    const getRoutes = () => {
        let results = [];
        for (let [pathName, description] of Object.entries(routes)) {
            results.push(
                <li key={pathName} className='nav-item'>
                    <Link 
                        className='nav-link sr-only'
                        to={pathName} 
                        style={pathName === filter 
                                ? chosenFilterStyle 
                                : {}}>
                    {description}
                    </Link>
                </li>)
        }
        return results
    };

    return (
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    {getRoutes()}
                </ul>
            </div>
        </nav>
    );
};

export default Filter;