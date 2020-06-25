import { WEBSOCKET_CONNECT, SEND_MESSAGE, receiveMessage } from 'src/actions/chatrooms/fourtwentyone';

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
      break;
    }
    case SEND_MESSAGE: {
      console.log('on demande d\'envoyer un message, je traduis comment ça doit se faire dans le middleware');
      // ici j'envoie un message
      // sur le canal d'échange socket j'ai accès à une méthode emit pour émettre un évènements
      // En premier argument on a le type d'évènement, en 2ème des infos véhiculées avec l'évènement
      // on récupère les infos qui nous intéressent du state, avec la fonction .getState qui nous est fournie par le store
      console.log(store.getState());
      const state = store.getState();
      socketCanal.emit('send_message', { content: state.fourtwentyoneChats.text, author: state.user.userToken.username });
      break;
    }
    default:
      next(action);
  }
};

export default socket;
