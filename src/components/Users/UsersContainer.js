import React from "react";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../Redux/users-reducer";
import users from "./users";


let mapStateToPropsFactory = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToPropsFactory = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}
const UsersContainer = connect(mapStateToPropsFactory,mapDispatchToPropsFactory)(users);
export default UsersContainer;