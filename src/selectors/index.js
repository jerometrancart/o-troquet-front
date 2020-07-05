/* eslint-disable import/prefer-default-export */
import { useHistory } from 'react-router-dom';

// ici on a écrit une fonction utilitaire qui retourne un résultat en fonction d'une entrée
// dans l'univers redux une fonction utilitaire qui prend un morceau de state en entrée s'appelle un selector

export const getNextId = (messages) => {
  // je veux générer un id
  // on part d'un tableau d'objet on le transpose en tableau de nombre
  const ids = messages.map((message) => message.id);
  // on utilise math.max pour trouver le plus grand nombre
  const highestId = Math.max(...ids);
  // on ajoute 1
  const id = highestId + 1;
  return id;
};

// selector pour déterminer si l'utilisateur connecté est bien l'auteur du message
export const isAuthor = (pseudo, author) => pseudo === author;

// get a tiny URL for game rooms
export const tinyURL = (length) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.match(/./g);
  let text = '';
  for (let i = 0; i < length; i++) {
    text += charset[Math.floor(Math.random() * charset.length)];
  }
  return text;
};
export const getRandomBackgroundImage = () => {
  const backgroundImage = [
    // 'https://images.unsplash.com/photo-1581442762865-54b07def988b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
    'https://images.unsplash.com/photo-1570227923466-c86256715853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
    'https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    // 'https://images.pexels.com/photos/858466/pexels-photo-858466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    // 'https://images.unsplash.com/photo-1564223269775-8130cb84f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    // 'https://images.unsplash.com/photo-1519214605650-76a613ee3245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
    // 'https://images.unsplash.com/photo-1482112048165-dd23f81c367d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    // 'https://images.unsplash.com/photo-1468056961052-15507578a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    // 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1503876466-1fc5143eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    // 'https://images.unsplash.com/photo-1528219086320-73c3c9558a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=677&q=80',
    // 'https://images.unsplash.com/photo-1506712465535-e301badbc49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
  ];
  // création d'une variable tirée au hasard, entier entre 0 et la longueur du tableau
  const random = Math.floor(Math.random() * backgroundImage.length);

  // application de l'image tirée au sort sur le fond de l'appli (balise body)
  document.body.style.backgroundImage = `url(${backgroundImage[random]})`;
};

export const redirect = (adress) => {
  const history = useHistory();
  history.push(adress);
};

export const urlSocketIO = 'http://localhost:3001';
export const socketCanal = window.io(urlSocketIO);

export const authenticationURI = 'ec2-100-26-57-91.compute-1.amazonaws.com/O-troquet-Back/public/api/';
export const authenticationURIAdministration = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/login';
// const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/login_check';
// const authenticationURIAdministration = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/login';

/*
if ((socketCanal === undefined)) {
    socketCanal = window.io(url);
  }
  else if ((socketCanal.connected === false)) {
    socketCanal = window.io(url);
}

*/

// http:ec2-100-26-57-91.compute-1.amazonaws.com/
// damien vpn, where backend was coding
// const authenticationURI = 'ec2-100-26-57-91.compute-1.amazonaws.com/O-troquet-Back/public/api/';
// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';
// export const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';
// http://ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users
// POST


// const authenticationURIAdministration = 'ec2-100-26-57-91.compute-1.amazonaws.com/O-troquet-Back/public/login';
