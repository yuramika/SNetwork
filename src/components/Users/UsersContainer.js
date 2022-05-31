import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setTotalUsersCountActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
           this.props.setTotalUsersCount(response.data.totalCount) 
            
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.total) })
    }

    render() {
        

        return <Users totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         users={this.props.users}
         onPageChanged={this.onPageChanged} 
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         />
    }
}

let mapStateToPropsFactory = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        }
    }
}
export default connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(UsersContainer);
