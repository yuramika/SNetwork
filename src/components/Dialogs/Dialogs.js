import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom"


const Dialogs = (props) => {
    let state = props.dialogsData
    let dialogsElements = state.dialogsData.map(dialog => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    });
    let messagesElements = state.MessageData.map(message => {
        return (<Message message={message.message}/>)
    });
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    if (props.isAuth === false) return <Navigate to="/login"/>


        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                    <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody}
                              placeholder='ENTER YOUR MESSAGE'></textarea>
                        <button onClick={onSendMessageClick}>SEND</button>
                    </div>
                </div>

            </div>

        );
    }

export default Dialogs