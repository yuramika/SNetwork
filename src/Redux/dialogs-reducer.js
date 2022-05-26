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
    let stateCopy = {
        ...state
        //MessageData:[...state.MessageData]
    };

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        stateCopy.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        stateCopy.MessageData.push({message: body, id: 5})
        stateCopy.newMessageBody = '';
    }
    return stateCopy;
}


export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;