import { } from 'src/actions';
import { NEW_PLAYER_JOINS, UPDATE_PARTY } from 'src/actions/games/fourtwentyone/player';

const initialState = {
  players: [],
  room: {},
  loading: true,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PARTY:
      console.log(action.room);
      return {
        ...state,
        room: action.room,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
