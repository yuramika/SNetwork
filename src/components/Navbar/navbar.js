import React from "react";
import classes from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={`${classes.nav} ${classes.active}`}>
            <ol>
                <li><a href="src/components/Navbar/navbar#">Profile</a></li>
                <li><a href="src/components/Navbar/navbar#">Messages</a></li>
                <li><a href="src/components/Navbar/navbar#">Photos</a></li>
                <li><a href="src/components/Navbar/navbar#">Music</a></li>
                <li><a href="src/components/Navbar/navbar#">Settings</a></li>
            </ol>
        </nav>

    )

}

export default Navbar;