import React from "react";
import {/* updateNewPostTextActionCreator */ addPostActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        PostData: state.profilePage.PostData,
        newTextPost: state.profilePage.newTextPost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      /*  updateNewTextPost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }, */
        addPost: (newTextPost) => {
            dispatch(addPostActionCreator(newTextPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;