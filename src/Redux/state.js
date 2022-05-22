import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            PostData: [
                {message: 'Hi, my name is Yura', id: 1, likesCount: 3},
                {message: 'Follow me', id: 2, likesCount: 4},
                {message: 'reaaaact', id: 3, likesCount: 7},
                {message: 'reaaaact', id: 3, likesCount: 7},
                {message: 'My account yuramika', id: 4, likesCount: 10}
            ],
            newTextPost: 'Что нового?'
        },
        messagePage: {
            dialogsData: [
                {name: "Andrey", id: 1},
                {name: "Egor", id: 2},
                {name: "Olya", id: 3},
                {name: "Egor", id: 2},
                {name: "Olya", id: 3},
                {name: "Kirill", id: 4}
            ],
            MessageData: [
                {message: 'Hi', id: 1},
                {message: 'nice', id: 2},
                {message: 'welcome', id: 3},
                {message: 'u2', id: 4}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State Changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}


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

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default store;
window.store = store;