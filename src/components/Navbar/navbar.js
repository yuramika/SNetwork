import React from "react";
import classes from "./navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`${classes.nav}`}>
            <ol>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/photos">Photos</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/videos">Videos</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </ol>
        </nav>

    )

}

export default Navbar;