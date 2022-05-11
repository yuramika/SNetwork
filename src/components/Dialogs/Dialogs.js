import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let sendElement = React.createRef();
  let send = () => {
      let smessage = sendElement.current.value;
      alert(smessage)
  }

    let dialogsElements = props.dialogsData.map(dialog => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    })
    let messagesElements = props.MessageData.map(message => {
        return (<Message message={message.message}/>)
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={sendElement}></textarea>
                    <button onClick={send}>SEND</button>
                </div>
            </div>

        </div>

    );
}
export default Dialogs