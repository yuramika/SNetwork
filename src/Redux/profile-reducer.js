import {usersAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
let initialState = {
    PostData: [
        {message: 'Hi, my name is Yura', id: 1, likesCount: 3},
        {message: 'Follow me', id: 2, likesCount: 4},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'My account yuramika', id: 4, likesCount: 10}
    ],
    //newTextPost: 'Что нового?',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newTextPost,
                likesCount: 3
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newTextPost: ''
            }

        }
     /*   case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newTextPost: action.newText
            };
        } */
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }


        default:
            return state;
    }
}
export default profileReducer;
export const addPostActionCreator = (newTextPost) => {
    return {
        type: ADD_POST, newTextPost: newTextPost
    }
}
/*export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
} */
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
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
                }
            })
    }
}
export const savePhoto = (file) => async (dispatch) => {
        let response = await profileAPI.savePhoto(file);

       if (response.data.resultCode === 0) {
           dispatch(savePhotoSuccess(response.data.data.photos))
       }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
       dispatch(getUserProfile(userId))
    }
}