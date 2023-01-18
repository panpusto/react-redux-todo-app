import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from '../containers/List';
import NotFound from './NotFound';


const Main = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={List} />
                    <Route exact path='/done' component={List} />
                    <Route exact path='/not-done' component={List} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default Main;
