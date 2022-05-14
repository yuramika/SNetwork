let renderEntireTree = () => {

}
let state = {
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newTextPost,
        likesCount:3
    };
    state.profilePage.PostData.push(newPost)
    state.profilePage.newTextPost = '';
    renderEntireTree(state);

}
export const updateNewPostText = (newText) => {
    state.profilePage.newTextPost = newText
    renderEntireTree(state);

}
export const subscribe = (observer) => {
    renderEntireTree = observer
}
export default state;