const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

}
const dialogsReducer = (state= initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.MessageData.push({message: body, id: 5})
        state.newMessageBody = '';
    }
    return state;
}

export default dialogsReducer;