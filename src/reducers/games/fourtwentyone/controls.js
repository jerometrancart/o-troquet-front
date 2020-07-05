import { } from 'src/actions';
import { NEW_PLAYER_JOINS, UPDATE_PARTY } from 'src/actions/games/fourtwentyone/player';

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
    default:
      return state;
  }
};
export default reducer;
