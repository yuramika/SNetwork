import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>Andrey</div>
                <div className={classes.dialog}>Egor</div>
                <div className={classes.dialog}>Valera</div>
                <div className={classes.dialog}>Kirill</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi, how are you?</div>
                <div className={classes.message}>Congratulation!</div>
                <div className={classes.message}>go game</div>
            </div>
        </div>
    );
}

export default Dialogs