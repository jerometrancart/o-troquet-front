import {
  ROLL_DICE,
  TOGGLE_BLOCK,
  NEXT_PLAYER,
  rollDice,
  toggleBlock,
  nextPlayer,
  START_GAME,
  LISTEN_GAME,
  listenGame,
  updateParty,
} from 'src/actions/games/fourtwentyone/player';
import { WEBSOCKET_CONNECT } from 'src/actions/chatrooms/fourtwentyone';
import { changeValue } from 'src/actions/user';
import { socketCanal } from 'src/selectors';
import axios from 'axios';
import jwt from 'jwt-decode';

// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/login_check';
// http://ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users
// POST

let gameListenerAdded = false;

const controls = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {

    case ROLL_DICE: {
      action.player = state.user.userToken.username;
      action.room = state.fourtwentyoneControls.room;

      console.log(action);
      // const toggleClasses = ((die) => {
      //   die.classList.toggle('odd-roll');
      //   die.classList.toggle('even-roll');
      // });

      // const dice = [...document.querySelectorAll('.die-list:not(.blocked)')];

      // dice.forEach((die) => {
      //   toggleClasses(die);
      // });
      socketCanal.emit('roll_dice', action.room, action.player);

      next(action);

      break;
    }
    case TOGGLE_BLOCK: {
      const targetedDie = action.evt.currentTarget;
      const targetedDieIdHtml = targetedDie.closest('.die');
      const targetedDieId = targetedDieIdHtml.id;
      console.log('targeted die id : ', targetedDieId);
      // console.log('targetedDie : ', targetedDie);
      // targetedDie.classList.toggle('blocked');
      // socketCanal.emit('die_blocked');

      action.room = state.fourtwentyoneControls.room;
      action.room = {
        ...action.room,
        [targetedDieId]: {
          data: action.room[targetedDieId].data,
          blocked: !action.room[targetedDieId].blocked,
          roll: action.room[targetedDieId].roll,
        },
      };
      action.roomId = state.fourtwentyoneChats.roomId;
      action.player = state.user.userToken.username;
      console.log('on toggleBlock, action : ', action);
      socketCanal.emit('toggle_block', action.room, action.player, targetedDieId);

      
      
      next(action);

      break;
    }

    case START_GAME:
      // console.log('START GAME');
      action.room = state.fourtwentyoneControls.room;
      // action.author = state.user.userToken.username;
      action.roomId = state.fourtwentyoneChats.roomId;
      action.player = state.user.userToken.username;
      socketCanal.emit('start_game', action);
      // store.dispatch(listenGame());
      next(action);
      break;

    case LISTEN_GAME:
      if (!gameListenerAdded) {
        // socketCanal.on('GAME_STARTED', (player) => {
        //   console.log('GAME STARTED BY ', player);
        

        // });

        
        // socketCanal.on('UPDATE_PARTY', (room) => {
        //   // store.dispatch(updateParty(room));
        //   console.log('la room a été mise à jour', room);
        // action.room = state.fourtwentyoneControls.room;
        //   console.log(action);
        // });




        gameListenerAdded = true;
      }
      console.log('action dans middleware games fourtwentyone : ', action);
      next(action);
      break;
    case WEBSOCKET_CONNECT: {
      // store.dispatch(changeValue('loading', true));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default controls;
