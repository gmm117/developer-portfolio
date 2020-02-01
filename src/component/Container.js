import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Project from './Project';
import About from './About';

function Container() {
    return (
        <div id="container">
            <Home />
            <Portfolio />
            <Project />
            <About />
        </div>
    );
}

export default Container;