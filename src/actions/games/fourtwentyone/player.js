export const ROLL_DICE = 'ROLL_DICE';
export const TOGGLE_BLOCK = 'TOGGLE_BLOCK';
export const NEXT_PLAYER = 'NEXT_PLAYER';

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
