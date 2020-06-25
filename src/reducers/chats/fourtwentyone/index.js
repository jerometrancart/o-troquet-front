import { RECEIVE_MESSAGE, SET_MESSAGE } from 'src/actions/chatrooms/fourtwentyone';

const initialState = {
  text: '',
  messages: [
    {
      author: 'Super Cat',
      content: 'Salut, ça va ?',
      id: 1,
    },
    {
      author: 'Super Cat',
      content: 'wesh ma gueule !',
      id: 2,
    },
  ],
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
        text: '',
      };
    }
    case SET_MESSAGE:
      return {
        ...state,
        text: action.message,
      };
    default:
      return state;
  }
};
export default reducer;
