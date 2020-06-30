import { ROLL_DICE, TOGGLE_BLOCK, NEXT_PLAYER, rollDice, toggleBlock, nextPlayer } from 'src/actions/games/fourtwentyone/player';

import axios from 'axios';
import jwt from 'jwt-decode';

// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/login_check';
// http://ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users
// POST
const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/login_check';
const authenticationURIAdministration = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/login';

const controls = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {

    case ROLL_DICE: {
      console.log(action);
      const toggleClasses = ((die) => {
        die.classList.toggle('odd-roll');
        die.classList.toggle('even-roll');
      });

      const getRandomNumber = ((min, max) => {
        const mini = Math.ceil(min);
        const maxi = Math.floor(max);
        return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
      });

      const dice = [...document.querySelectorAll('.die-list:not(.blocked)')];
      dice.forEach((die) => {
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
      });

      next(action);

      break;
    }
    case TOGGLE_BLOCK: {
      const targetedDie = action.evt.currentTarget;
      console.log(targetedDie);
      targetedDie.classList.toggle('blocked');
      next(action);

      break;
    }

    default:
      next(action);
  }
};

export default controls;
