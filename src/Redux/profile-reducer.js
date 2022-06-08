import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    PostData: [
        {message: 'Hi, my name is Yura', id: 1, likesCount: 3},
        {message: 'Follow me', id: 2, likesCount: 4},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'My account yuramika', id: 4, likesCount: 10}
    ],
    newTextPost: 'Что нового?',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newTextPost,
                likesCount: 3
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newTextPost: ''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newTextPost: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }


        default:
            return state;
    }
}
export default profileReducer;
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}