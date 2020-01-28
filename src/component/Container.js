import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';

function Container() {
    return (
        <div id="container">
            <Home />
            <Portfolio />
            <About />
        </div>
    );
}

export default Container;