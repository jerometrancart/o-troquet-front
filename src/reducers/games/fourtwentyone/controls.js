import { } from 'src/actions';
import { NEW_PLAYER_JOINS } from 'src/actions/games/fourtwentyone/player';
import { UPDATE_PARTY } from '../../../actions/games/fourtwentyone/player';

const initialState = {
  players: [],
  room: {},
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_PLAYER_JOINS: {
      console.log(action.player);
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
      return {
        ...state,
        room: action.room,
      };
    default:

      return state;
  }
};
export default reducer;
