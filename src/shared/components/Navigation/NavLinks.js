import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLinks to="/" exact>ALL USERS</NavLinks>
        </li>
        <li>
            <NavLinks to="/u1/places">MY PLACES</NavLinks>
        </li>
        <li>
            <NavLinks to="/places/new">ADD PLACE</NavLinks>
        </li>
        <li>
            <NavLinks to="/auth">AUTHENTICATE</NavLinks>
        </li>
    </ul>
};

export default NavLinks;