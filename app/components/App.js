/**
 * Created by caucxing on 2016-2-17.
 */
import React from 'react';
import {RouteHandler} from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <RouteHandler />
                <Footer />
            </div>
    );
    }
}

export default App;