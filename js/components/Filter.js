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
            results.push(<li key={pathName}><Link to={pathName} style={pathName === filter ? chosenFilterStyle : {}}>{description}</Link></li>)
        }
        return results
    };

    return (
        <div>
            <ul>
                {getRoutes()}
            </ul>
        </div>
    );
};

export default Filter;