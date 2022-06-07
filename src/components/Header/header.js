import React from "react";
import classes from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://papik.pro/uploads/posts/2021-09/1630901546_11-papik-pro-p-risunki-po-kletochkam-korgi-12.png"/>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>)
}

export default Header;