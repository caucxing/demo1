/**
 * Created by caucxing on 2016-2-17.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
<Route handler={App}>
    <Route path='/' handler={Home} />
    </Route>
);