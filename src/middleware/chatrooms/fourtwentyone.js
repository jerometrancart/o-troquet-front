import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  webSocketDisconnect,
  SEND_MESSAGE,
  receiveMessage,
  WEBSOCKET_CREATE_ROOM,
  WEBSOCKET_GET_ROOM,
  webSocketJoinRoom,
  WEBSOCKET_LEAVE_ROOMS,
} from 'src/actions/chatrooms/fourtwentyone';
import GameboardPage from 'src/containers/GameboardPage/Fourtwentyone';
import {
  tinyURL,
  redirect,
} from 'src/selectors';

// je prépare une let qui sera accessible dans tout mon fichier qui contiendra mon canal
let socketCanal;

const socket = (store) => (next) => (action) => {
  console.log('dans socket middleware : ', action);
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      // open general canal, using .io lib (coming from script in index.html)
      // socketCanal = window.io('http://localhost:3001', { reconnection: false });
      socketCanal = window.io('http://localhost:3001');
      
      // i get my state, to recognize my username
      const state = store.getState();
      
      // i emit an action the server will recognize and broadcast, with a message
      socketCanal.emit('new_user_client_to_server', { content: ' joined', author: state.user.userToken.username });
      // listen to new users joining and manage their messages differently
      socketCanal.on('new_user_server_to_client', (message) => {
        console.log('new user ', message.author);
        socketCanal.emit('send_message_client_to_server', 'general', { content: `${message.author} joined`, author: 'Bartender' });
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
      // on écoute un événement, ça fonctionne comme les écouteurs d'événements qu'on connait bien
      // document.addEventListener('click', () => { })
      // ici j'envoie un message
      // sur le canal d'échange socketCanal j'ai accès à une méthode emit pour émettre un évènement
      // En premier argument on a le type d'évènement, en 2ème des infos véhiculées avec l'évènement
      // next(action);
      break;
    }
    case WEBSOCKET_DISCONNECT: {
      //debugger;
      console.log('middleware chatrooms je veux me déconnecter');
      const state = store.getState();
      // socketCanal = window.io('http://localhost:3001');
      if (socketCanal !== undefined) {
        console.log(socketCanal.id);
        socketCanal.emit('disconnect', state.user.userToken.username);
        socketCanal.disconnect();
        socketCanal.close();
      }
      break;
    }
    case SEND_MESSAGE: {
      console.log('on demande d\'envoyer un message, je traduis comment ça doit se faire dans le middleware');
      // debugger;
      // ici j'envoie un message
      // sur le canal d'échange socket j'ai accès à une méthode emit pour émettre un évènements
      // En premier argument on a le type d'évènement, en 2ème des infos véhiculées avec l'évènement
      // on récupère les infos qui nous intéressent du state, avec la fonction .getState qui nous est fournie par le store
      const state = store.getState();
      if (state.fourtwentyoneChats.text !== '') {
        console.log('state : ', store.getState());
        socketCanal.emit('send_message_client_to_server', state.fourtwentyoneChats.roomId, { content: state.fourtwentyoneChats.text, author: state.user.userToken.username });
      }
      next(action);
      break;
    }
    case WEBSOCKET_CREATE_ROOM: {
      action.roomId = tinyURL(12);
      console.log('roomId calculated in front : ', action.roomId);
      // j'envoie le chemin au serveur, qui écoute l'évènement 'set_path'
      if ((socketCanal === undefined)) {
        socketCanal = window.io('http://localhost:3001');
      }
      else if ((socketCanal.connected === false)) {
        socketCanal = window.io('http://localhost:3001');
      }
      // socketCanal.emit('set_path', path);
      // j'appelle le store pour avoir mon pseudo
      const state = store.getState();
      // je dis au socket que je suis arrivé
      socketCanal.emit('new_user', state.user.userToken.username);

      // je demande au socket de me créer une chatroom
      socketCanal.emit('create_room', action.roomId, state.user.userToken.username);
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
      if ((socketCanal === undefined)) {
        socketCanal = window.io('http://localhost:3001');
      }
      else if ((socketCanal.connected === false)) {
        socketCanal = window.io('http://localhost:3001');
      }
      console.log(socketCanal);
      socketCanal.emit('available_rooms');
      socketCanal.on('available_rooms', (rooms) => {
        console.log('available_rooms returned from server :', rooms);
      });
      socketCanal.emit('get_room');
      socketCanal.on('your_room', (yourRoomId) => {
        console.log('i\'ve found you a room : ', yourRoomId);
        store.dispatch(webSocketJoinRoom(yourRoomId));
      });
      // store.dispatch(webSocketDisconnect());
      console.log('');
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
