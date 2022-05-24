const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostData: [
        {message: 'Hi, my name is Yura', id: 1, likesCount: 3},
        {message: 'Follow me', id: 2, likesCount: 4},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'My account yuramika', id: 4, likesCount: 10}
    ],
    newTextPost: 'Что нового?'
}

const profileReducer = (state = initialState, action) => {
switch (action.type) {
case ADD_POST: {
        let newPost = {
            id: 5,
            message: state.newTextPost,
            likesCount: 3
        };
        let stateCopy = {...state}
        stateCopy.PostData = [...state.PostData];
        stateCopy.PostData.push(newPost);
        stateCopy.newTextPost = '';
        return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newTextPost = {...state.newTextPost};
            stateCopy.newTextPost = action.newText;
            return stateCopy;
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