import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <nav className="nav-bar">
            <div id="header-flex">
                <img src={ props.logo } />
                <input></input>
            </div>
            <div id="header-flex2">
                <img src={ props.eu } className="eu"/>
            </div>
        </nav>
    )
}

export default Header;