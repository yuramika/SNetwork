import React from "react";
import classes from "./MyPosts.module.css"
import Post from "../Post/Post";


const MyPosts = () => {
    let PostData = [
        {message: 'Hi, my name is Yura', id: 1, likesCount: 3},
        {message: 'Follow me', id: 2, likesCount: 4},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'My account yuramika', id: 4, likesCount: 10}
    ]

    let PostsElement = PostData.map((posts)=>{return( <Post message={posts.message} likesCount={posts.likesCount}/>)})
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