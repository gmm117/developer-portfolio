import React from 'react';

function Header () {
    return (
        <header id="header">
            <div>
                <div className="inner_container clearfix">
                    <div>
                        <h1 className="logo">
                            <a href="#home">Hong's Portfolio</a>
                        </h1>
                    </div>
                    <nav className="gnb_wrap">
                        <ul className="gnb clearfix">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#project">Project</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="inner_container clearfix">
                    <div className="gnb_phone">
                        <h4>Tel: 010-7118-2519</h4>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header; 