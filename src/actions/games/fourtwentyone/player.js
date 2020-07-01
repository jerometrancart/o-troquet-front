export const ROLL_DICE = 'ROLL_DICE';
export const TOGGLE_BLOCK = 'TOGGLE_BLOCK';
export const NEXT_PLAYER = 'NEXT_PLAYER';
export const START_GAME = 'START_GAME';
export const LISTEN_GAME = 'LISTEN_GAME';
export const NEW_PLAYER_JOINS = 'NEW_PLAYER_JOINS';
export const UPDATE_PARTY = 'UPDATE_PARTY';


export const rollDice = () => ({
  type: ROLL_DICE,
});

export const toggleBlock = (evt) => ({
  type: TOGGLE_BLOCK,
  evt,
});

export const nextPlayer = () => ({
  type: NEXT_PLAYER,
});

export const startGame = (roomId, player) => ({
  type: START_GAME,
  roomId,
  player,
});

export const listenGame = (roomId) => ({
  type: LISTEN_GAME,
  roomId,
});

export const newPlayerJoins = (player) => ({
  type: NEW_PLAYER_JOINS,
  player,
});

export const updateParty = (room) => ({
  type: UPDATE_PARTY,
  room,
});
