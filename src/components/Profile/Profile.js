import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/state";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostData={props.PostData} addPost={props.addPost} newTextPost={props.newTextPost} updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}

export default Profile;