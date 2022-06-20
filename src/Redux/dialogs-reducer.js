//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    ]

}
const dialogsReducer = (state= initialState, action) => {
    /*  let stateCopy = {
          ...state,
          MessageData:[...state.MessageData]
      };

     if (action.type === UPDATE_NEW_MESSAGE_BODY) {
          stateCopy.newMessageBody = action.body;
      } else  if (action.type === SEND_MESSAGE) {
          let body = action.newMessageBody;
          stateCopy.MessageData.push({message: body, id: 5})
          //stateCopy.newMessageBody = '';
      }
      return stateCopy;
  } */
 switch (action.type) {
    /* case UPDATE_NEW_MESSAGE_BODY:
         return {
             ...state,
             newMessageBody: action.body
         } */
     case SEND_MESSAGE:
         let body = action.newMessageBody
         return {
           ...state,
             MessageData: [...state.MessageData, {message: body, id: 6}]
         }
     default:
         return state;
 }
}
export const sendMessageCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE , newMessageBody}
}
/*export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}
*/
export default dialogsReducer;