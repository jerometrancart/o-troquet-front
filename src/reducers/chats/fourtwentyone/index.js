import { RECEIVE_MESSAGE, SET_MESSAGE, SEND_MESSAGE, WEBSOCKET_JOIN_ROOM } from 'src/actions/chatrooms/fourtwentyone';

const initialState = {
  text: '',
  messages: [
    {
      author: 'Regular customer',
      content: 'C\'est une bonne situation, ça, scribe ?',
      id: 1,
    },
    {
      author: 'Another regular',
      content: 'Vous savez, moi je ne crois pas qu\'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd\'hui avec vous ...',
      id: 2,
    },
  ],
  roomId: '',
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_MESSAGE: {
      console.log('reducer RECEIVE_MESSAGE ', action.message);
      const newMessages = [
        ...state.messages,
      ];
      const newMessage = {
        ...action.message,
      };
      newMessages.push(newMessage);
      return {
        ...state,
        messages: newMessages,
      };
    }
    case SET_MESSAGE:
      return {
        ...state,
        text: action.message,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        text: '',
      };
    case WEBSOCKET_JOIN_ROOM:
      return {
        ...state,
        roomId: action.roomId,
      };
    default:
      return state;
  }
};
export default reducer;
