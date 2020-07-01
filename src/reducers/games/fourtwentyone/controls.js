import { } from 'src/actions';
import { NEW_PLAYER_JOINS } from 'src/actions/games/fourtwentyone/player';

const initialState = {
  players: [],
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
    default:

      return state;
  }
};
export default reducer;
