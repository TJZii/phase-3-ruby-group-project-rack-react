import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to="/">Home / </NavLink>

            <NavLink to="/genres"> Categories /</NavLink>

            <NavLink to="/allGames"> All Games</NavLink>
        </div>
    )
}

export default Nav;