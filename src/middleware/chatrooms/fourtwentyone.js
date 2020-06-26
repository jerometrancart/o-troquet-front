import { useHistory } from 'react-router-dom';
import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT, SEND_MESSAGE, receiveMessage, WEBSOCKET_CREATE_ROOM } from 'src/actions/chatrooms/fourtwentyone';
import { tinyURL } from 'src/selectors';
import { WEBSOCKET_GET_ROOM } from '../../actions/chatrooms/fourtwentyone';

// je prépare une let qui sera accessible dans tout mon fichier qui contiendra mon canal
let socketCanal;

const socket = (store) => (next) => (action) => {
  console.log('dans socket middleware : ', action);
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      // ouverture du canal, on exécute la méthode io sur window mise à disposition par la librairie socket.io (ajoutée dans index.html)
      socketCanal = window.io('http://localhost:3001');
      // on se met en mode écoute, dès que l'évènement 'send_message' a lieu / est émis par le serveur, je réagis
      // dès que quelqu'un envoie l'évènement 'send_message' dans mon canal de discussion, je réagis
      socketCanal.on('send_message', (message) => {
        console.log('un message a été envoyé', message);
        console.log('je peux réagir, en modifiant mon state puisque je veux l\'afficher dans mon application');
        // je veux stocker le nouveau message reçu dans mon state
        store.dispatch(receiveMessage(message));
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
      socketCanal.emit('disconnect');
      socketCanal.disconnect();
      socketCanal.close();
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
      const path = tinyURL(12);
      console.log('Random tiny URL : ', path);
      // j'envoie le chemin au serveur, qui écoute l'évènement 'set_path'
      socketCanal.emit('set_path', path);
      const room = io(`/gameboard/fourtwentyone/${path}`);
      const history = useHistory();
      history.push(`/gameboard/fourtwentyone/${path}`);
      break;
    }
    default:
      next(action);
  }
};

export default socket;
