/* eslint-disable import/prefer-default-export */

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
