import React from "react";
import classes from "./MyPosts.module.css"
import Post from "../Post/Post";
import {updateNewPostText} from "../../Redux/state";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../Redux/state";
import MyPosts from "./MyPosts";
import StoreContext from "../../StoreContext";

const MyPostsContainer = () => {
  /*  let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return <MyPosts updateNewTextPost={onPostChange}
                    addPost={addPost}
                    PostData={state.profilePage.PostData}
                    newTextPost={state.profilePage.newTextPost}/>
} */
    return (
        <StoreContext.Consumer>
            {
            (store)=> {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                   store.dispatch(action);
                }
                return ( <MyPosts updateNewTextPost={onPostChange}
                             addPost={addPost}
                             PostData={state.profilePage.PostData}
                             newTextPost={state.profilePage.newTextPost}/>)
            }
        }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;