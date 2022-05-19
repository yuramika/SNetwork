import React from "react";
import classes from "./Post.module.css"



const Post = (props) => {

    return (
        <div>
            <div>
                <img className={classes.photo} src="https://media.pn.am/media/issue/197/297/photo/197297.jpg" width="50" height="50"/>
                {props.message}
                <div>Likes: {props.likesCount}</div>
            </div>
        </div>



)
}

export default Post;

