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
            <Post/>
            <Post/>
            <Post/>
        </div>


    )
}

export default MyPosts;