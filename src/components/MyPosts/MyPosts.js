import React from "react";
import classes from "./MyPosts.module.css"
import Post from "../Post/Post";
import {updateNewPostText} from "../../Redux/state";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../Redux/state";

const MyPosts = (props) => {
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewTextPost(text)
    }
    let newPostElement = React.createRef()
    let PostsElement = props.PostData.map((posts)=>{return( <Post message={posts.message} likesCount={posts.likesCount}/>)})
    return (
        <div>
                    <div className={classes.MyPost}><h3>MY POST</h3></div>
            <div className={classes.border}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newTextPost}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>ADD POST</button>
                </div>
            </div>
            {PostsElement}
        </div>


    )
}

export default MyPosts;