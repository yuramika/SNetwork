import React from "react";
import classes from "./MyPosts.module.css"
import Post from "../Post/Post";


const MyPosts = () => {
    return (
        <div>
            MY POST
            <div className={classes.border}>
                <textarea></textarea>
                <button value="SEND">ADD POST</button>
            </div>
            <Post message="Hi, my name is Yura" />
            <Post message="my account yuramika"/>
            <Post message="follow me"/>
        </div>


    )
}

export default MyPosts;