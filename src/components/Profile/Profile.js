import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/state";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostData={props.PostData} dispatch={props.dispatch} newTextPost={props.newTextPost}/>
        </div>

    )
}

export default Profile;