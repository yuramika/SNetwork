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
   debugger;
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newTextPost,
            likesCount: 3
        };
        state.PostData.push(newPost)
        state.newTextPost = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newTextPost = action.newText
    }
    return state;
}
export default profileReducer;