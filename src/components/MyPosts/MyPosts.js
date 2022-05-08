import React from "react";
import classes from "./MyPosts.module.css"
import Post from "../Post/Post";


const MyPosts = (props) => {

    let PostsElement = props.PostData.map((posts)=>{return( <Post message={posts.message} likesCount={posts.likesCount}/>)})
    return (
        <div>
            <div className={classes.MyPost}><h3>MY POST</h3></div>
            <div className={classes.border}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button value="SEND">ADD POST</button>
                </div>
            </div>
            {PostsElement}
        </div>


    )
}

export default MyPosts;