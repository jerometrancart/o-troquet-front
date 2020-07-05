import { } from 'src/actions';
import { NEW_PLAYER_JOINS, UPDATE_PARTY } from 'src/actions/games/fourtwentyone/player';
import { WEBSOCKET_CONNECT } from 'src/actions/chatrooms/fourtwentyone';
const initialState = {
  players: [],
  room: {},
  loadingRoom: true,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PARTY:
      console.log(action.room);
      return {
        ...state,
        room: action.room,
        loadingRoom: false,
      };
    case WEBSOCKET_CONNECT:
      return {
        ...state,
        loadingRoom: false,
      };
    default:
      return state;
  }
};
export default reducer;
