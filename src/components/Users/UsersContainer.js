import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage,unfollow, toggleIsFollowingProgress,getUsersThunkCreator } from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Commons/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
        /*this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
            usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        }) */

    }

    render() {


        return <>
            {this.props.isFetching? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToPropsFactory = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
/*let mapDispatchToPropsFactory = (dispatch) => {
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
} */
export default compose(
    connect(mapStateToPropsFactory,{follow, setCurrentPage,
        unfollow,toggleIsFollowingProgress,getUsersThunkCreator} ),
    withAuthRedirect
)
(UsersContainer)