import {unfollowAPI, usersAPI,followAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE_IN_FOLLOWING_PROGRESS';


let initialState = {
    users: [] ,
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress:[]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })

            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }  case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }   case TOGGLE_IN_FOLLOWING_PROGRESS: {
        return {...state, followingInProgress: action.isFetching?
                [...state.followingInProgress,action.userID]:
                state.followingInProgress.filter(id => id != action.userID)
        }
    }


        default:
            return state;
    }
}

export const followSuccses = (userID) => {
    return {
        type: FOLLOW, userID
    }
}
export const unfollowSuccses = (userID) => {
    return {
        type: UNFOLLOW, userID
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
export const toggleIsFollowingProgress = (isFetching, userID) => {
    return {
        type: TOGGLE_IN_FOLLOWING_PROGRESS, isFetching, userID
    }
}

export const getUsersThunkCreator = (page,pageSize) => {
 return   (dispatch) => {
    dispatch(toggleIsFetching(true))
     dispatch(setCurrentPage(page))
    usersAPI.getUsers(page,pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))

    })
}
    }
    export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userID))
        unfollowAPI.getUnfollow(userID).then(response => {
            if (response.data.resultCode === 0) {
               dispatch(followSuccses(userID))
            }
          dispatch(toggleIsFollowingProgress(false, userID))
    })
    }
    }
    export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userID))
        followAPI.getFollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccses(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID))
        })

    }
    }
export default usersReducer;