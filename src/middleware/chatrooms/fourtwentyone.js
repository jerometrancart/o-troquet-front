import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
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
import {  } from '../../actions/chatrooms/fourtwentyone';


// je prépare une let qui sera accessible dans tout mon fichier qui contiendra mon canal
let socketCanal;

const socket = (store) => (next) => (action) => {
  console.log('dans socket middleware : ', action);
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      // ouverture du canal, on exécute la méthode io sur window mise à disposition par la librairie socket.io (ajoutée dans index.html)
      socketCanal = window.io('http://localhost:3001', { reconnection: false });
      // on se met en mode écoute, dès que l'évènement 'send_message' a lieu / est émis par le serveur, je réagis
      // dès que quelqu'un envoie l'évènement 'send_message' dans mon canal de discussion, je réagis



      // socketCanal.on('room_created', (room, user) => {
      //   console.log('room created :', room, user);
      //   const roomElement = document.createElement('div')
      //   roomElement.innerText = room
      //   const roomLink = document.createElement('a')
      //   roomLink.href = `/${room}`
      //   roomLink.innerText = 'join'
      //   roomContainer.append(roomElement)
      //   roomContainer.append(roomLink)
      // });





      socketCanal.on('send_message', (message) => {
        console.log('un message a été envoyé', message);
        console.log('je peux réagir, en modifiant mon state puisque je veux l\'afficher dans mon application');
        // je veux stocker le nouveau message reçu dans mon state
        store.dispatch(receiveMessage(`${message.name}: ${message.message}`));
      });

      // say who connects
      socketCanal.on('user-connected', (name) => {
        store.dispatch(receiveMessage(`${name} connected`));
        // appendMessage(`${name} connected`);
      });

      // say who disconnects
      socketCanal.on('user-disconnected', (name) => {
        store.dispatch(receiveMessage(`${name} disconnected`));
        // appendMessage(`${name} disconnected`);
      });
      // on écoute un événement, ça fonctionne comme les écouteurs d'événements qu'on connait bien
      // document.addEventListener('click', () => { })
      // ici j'envoie un message
      // sur le canal d'échange socketCanal j'ai accès à une méthode emit pour émettre un évènement
      // En premier argument on a le type d'évènement, en 2ème des infos véhiculées avec l'évènement
      next(action);
      break;
    }
    case WEBSOCKET_DISCONNECT: {
      //debugger;
      console.log('middleware chatrooms je veux me déconnecter');
      // socketCanal = window.io('http://localhost:3001');
      if (socketCanal !== undefined) {
        console.log(socketCanal);
        socketCanal.emit('disconnect');
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
        console.log(store.getState());
        socketCanal.emit('send_message', { content: state.fourtwentyoneChats.text, author: state.user.userToken.username });
      }
      next(action);
      break;
    }
    case WEBSOCKET_CREATE_ROOM: {
      const roomId = tinyURL(12);
      console.log('roomId calculated in front : ', roomId);
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
      // je demande au socket de me créer une chatroom
      socketCanal.emit('create_room', roomId, state.user.userToken.username);
      // j'écoute la réponse
      socketCanal.on('room_created', (room) => {
        console.log('roomId returned from server :', room);
        // je dois quitter les éventuelles autres rooms
        // TODO quitter les autres rooms
        store.dispatch(webSocketJoinRoom(room));
        store.dispatch(webSocketDisconnect());
      });
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
      });
      // store.dispatch(webSocketDisconnect());
      console.log('');
      break;
    }
    case WEBSOCKET_LEAVE_ROOMS: {

    
    
      
      // const room = io(`/gameboard/fourtwentyone/${path}`);
      // const history = useHistory();
      // history.push(`/gameboard/fourtwentyone/${path}`);
      break;
    }
    default:
      next(action);
  }
};

export default socket;
