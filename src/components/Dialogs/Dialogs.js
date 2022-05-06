import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${classes.dialog} ${classes.active}`}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {

    let dialogsData = [
        {name: "Andrey", id: 1},
        {name: "Egor", id: 2},
        {name: "Olya", id: 3},
        {name: "Kirill", id: 4}
    ]
    let MessageData = [
        {message: 'Hi', id: 1},
        {message: 'nice', id: 2},
        {message: 'welcome', id: 3},
        {message: 'u2', id: 4}
    ]

    let dialogsElements = dialogsData.map(dialog => { return (<DialogItem name={dialog.name} id={dialog.id}/>)})
    let messagesElements = MessageData.map(message => { return (<Message message={message.message}/>)})

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs