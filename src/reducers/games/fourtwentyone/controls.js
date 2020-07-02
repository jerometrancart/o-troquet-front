import { } from 'src/actions';
import { NEW_PLAYER_JOINS, UPDATE_PARTY } from 'src/actions/games/fourtwentyone/player';

const initialState = {
  players: [],
  room: {},
  loading: true,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_PLAYER_JOINS: {
      console.log('new player joins : ', action.player);
      // console.log(state.players);
      const newPlayers = [
        ...state.players,
      ];
      const newPlayer = {
        name: action.player,
        score: 0,
      };
      newPlayers.push(newPlayer);
      return {
        ...state,
        players: newPlayers,
      };
    }
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
