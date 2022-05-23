import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/state";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    /*
    let state = props.store.getState().messagePage
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    } */
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagePage
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                                     sendMessage={onSendMessageClick}
                                     dialogsData={state}/>);

                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;