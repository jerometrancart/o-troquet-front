import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  webSocketDisconnect,
  SEND_MESSAGE,
  receiveMessage,
  WEBSOCKET_CREATE_ROOM,
  webSocketCreateRoom,
  WEBSOCKET_GET_ROOM,
  webSocketJoinRoom,
  WEBSOCKET_LEAVE_ROOMS,
  WEBSOCKET_LISTEN_ROOM,
  webSocketListenRoom,
} from 'src/actions/chatrooms/fourtwentyone';
import GameboardPage from 'src/containers/GameboardPage/Fourtwentyone';
import {
  tinyURL,
  redirect,
  getNextId,
} from 'src/selectors';

// je prépare une let qui sera accessible dans tout mon fichier qui contiendra mon canal
let socketCanal;

const url = 'http://localhost:3001';

// const url = '192.168.56.101:3001';
 
let listeneradded = false;

const socket = (store) => (next) => (action) => {
  console.log('dans socket middleware : ', action);
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      console.log('websocket lancé');
      // open general canal, using .io lib (coming from script in index.html)
      // connect only if not already connected
      if ((socketCanal === undefined)) {
        socketCanal = window.io(url);
      }
      else if ((socketCanal.connected === false)) {
        socketCanal = window.io(url);
      }
      // socketCanal = window.io(url);
      if (!listeneradded) {
      if (action.roomId !== undefined) {
        socketCanal.emit('check_room_client_to_server', action.roomId);
        socketCanal.on('check_room_server_to_client_ok', () => {
          // console.log('check_room_server_to_client_ok');
          // window.io(url).emit('check_room_client_to_server', roomId);
          // window.io(url).on('check_room_server_to_client_ok', () => {
          // store.dispatch(webSocketListenRoom());
          next(action);
        });
        socketCanal.on('check_room_server_to_client_not_ok', () => {
          // window.io(url).on('check_room_server_to_client_not_ok', () => {
          // la room n'existe pas, message d'erreur à afficher quelque part
          console.log('la room n\'existe pas, dsl, faites autre chose de votre vie');
          // store.dispatch(webSocketDisconnect());
          action.roomId = '';
        });
      }
     
       // listen to new users joining and manage their messages differently
       socketCanal.on('new_user_server_to_client', (message) => {
        const state = store.getState();
        console.log('new user ', message.author);
        message.id = getNextId(state.fourtwentyoneChats.messages);
        store.dispatch(receiveMessage({ content: `${message.author} joined`, author: 'Bartender', id: message.id }));

        // socketCanal.emit('send_message_client_to_server', state.fourtwentyoneChats.roomId, { content: `${message.author} joined`, author: 'Bartender' });
      });


      // listen to incoming messages from general connection
      socketCanal.on('send_message_server_to_client', (message) => {
        console.log('un message a été reçu ', message);
        // je veux stocker le nouveau message reçu dans mon state
        store.dispatch(receiveMessage(message));
      });

      // say who connects
      // socketCanal.on('user-connected', (name) => {
      //   store.dispatch(receiveMessage({ author: name, content: ' connected' }));
      // });

      // say who disconnects
      socketCanal.on('user-disconnected', (name) => {
        store.dispatch(receiveMessage({ author: name, content: ' disconnected' }));
      });

      listeneradded = true;
    }
      // on écoute un événement, ça fonctionne comme les écouteurs d'événements qu'on connait bien
      // document.addEventListener('click', () => { })
      // ici j'envoie un message
      // sur le canal d'échange socketCanal j'ai accès à une méthode emit pour émettre un évènement
      // En premier argument on a le type d'évènement, en 2ème des infos véhiculées avec l'évènement
      break;
    }
// ====================================================================================================== //
    case WEBSOCKET_LISTEN_ROOM: {
      // i get my state, to recognize my username
      const state = store.getState();
      action.roomId = state.fourtwentyoneChats.roomId;
      console.log('ICI  !!!!!!!!!!!!!!!! : ', action.roomId);
      // i emit an action the server will recognize and broadcast, with a message
      const id = getNextId(state.fourtwentyoneChats.messages);
      socketCanal.emit('new_user_client_to_server', state.fourtwentyoneChats.roomId, { content: ' joined', author: state.user.userToken.username, id });
      
     
      next(action);
      break;
    }
// ====================================================================================================== //
    case WEBSOCKET_DISCONNECT: {
      //debugger;
      console.log('middleware chatrooms je veux me déconnecter');
      const state = store.getState();

      // socketCanal = window.io(url);
      if (socketCanal !== undefined) {
        console.log(socketCanal.id);
        socketCanal.emit('disconnect', state.user.userToken.username, state.fourtwentyoneChats.roomId);
        socketCanal.disconnect();
        socketCanal.close();
      }
      break;
    }
// ====================================================================================================== //
    case SEND_MESSAGE: {
      console.log('on demande d\'envoyer un message, je traduis comment ça doit se faire dans le middleware');
      // debugger;
      // ici j'envoie un message
      // sur le canal d'échange socket j'ai accès à une méthode emit pour émettre un évènements
      // En premier argument on a le type d'évènement, en 2ème des infos véhiculées avec l'évènement
      // on récupère les infos qui nous intéressent du state, avec la fonction .getState qui nous est fournie par le store
      const state = store.getState();
      const message = { content: state.fourtwentyoneChats.text, author: state.user.userToken.username };
      if (state.fourtwentyoneChats.text !== '') {
        console.log('state : ', store.getState());
        socketCanal.emit('send_message_client_to_server', state.fourtwentyoneChats.roomId, message);
        message.id = getNextId(state.fourtwentyoneChats.messages);
        // store.dispatch(receiveMessage(message));
      }
      next(action);
      break;
    }
// ====================================================================================================== //
    case WEBSOCKET_CREATE_ROOM: {
      // action.roomId = tinyURL(12);
      // console.log('roomId calculated in front : ', action.roomId);
      // j'envoie le chemin au serveur, qui écoute l'évènement 'set_path'
      // if ((socketCanal === undefined)) {
      //   socketCanal = window.io(url);
      // }
      // else if ((socketCanal.connected === false)) {
      //   socketCanal = window.io(url);
      // }
      // socketCanal.emit('set_path', path);
      // j'appelle le store pour avoir mon pseudo
      const state = store.getState();
      // je dis au socket que je suis arrivé
      socketCanal.emit('new_user', state.user.userToken.username);

      // je demande au socket de me créer une chatroom
      socketCanal.emit('create_room', state.user.userToken.username);
      // j'écoute la réponse
      socketCanal.on('room_created', (room) => {
        console.log('roomId returned from server : ', room);
        // je rejoins la room en question
        // socketCanal.join(room.id);
        // je dois quitter les éventuelles autres rooms
        // TODO quitter les autres rooms
        // window.location = `http://localhost:8080/gameboard/fourtwentyone/${room.id}`;
        store.dispatch(webSocketJoinRoom(room.id));
        // store.dispatch(webSocketDisconnect());
      });
      next(action);
      break;
    }
    case WEBSOCKET_GET_ROOM: {
      // if ((socketCanal === undefined)) {
      //   socketCanal = window.io(url);
      // }
      // else if ((socketCanal.connected === false)) {
      //   socketCanal = window.io(url);
      // }
      console.log('id socket : ', socketCanal.id);
      // socketCanal.emit('available_rooms');
      // socketCanal.on('available_rooms', (rooms) => {
      //   console.log('available_rooms returned from server :', rooms);
      // });
      socketCanal.emit('get_room');
      socketCanal.on('your_room', (yourRoomId) => {
        console.log('i\'ve found you a room : ', yourRoomId);
        store.dispatch(webSocketJoinRoom(yourRoomId));
      });
      socketCanal.on('no_room', () => {
        console.log('no room available, i create one for ya');
        store.dispatch(webSocketCreateRoom());
      });
      break;
    }
    case WEBSOCKET_LEAVE_ROOMS: {

      // const room = io(`/gameboard/fourtwentyone/${path}`);
      // const history = useHistory();
      // history.push(`/gameboard/fourtwentyone/${path}`);

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default socket;
