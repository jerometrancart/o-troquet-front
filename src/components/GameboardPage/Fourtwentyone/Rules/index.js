import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Rules = () => (
  <div className="theRules">
  {/*   
    Le 421 est un jeu de dés très populaire en France. En effet, ses règles simples et sa convivialité en font un des classiques des jeux de bar.

Mêlant rapidité et stratégie ce jeu de dés plaira à tous. Nous vous présenterons, ici, les règles de base du 421.

Pour jouer au 421, il vous faut :
Être minimum deux joueurs.
3 dés
Un « pot » de 21 jetons.
Commencer une partie de 421 :
Pour commencer une partie de 421, il faut dans un premier temps déterminer le joueur qui commencera la partie. Pour ce faire, il faut lancer une partie de dés entre les joueurs. Celui qui fait le plus petit score ou le plus grand score lance la partie, c’est à vous de décider au départ. Chaque joueur lance les dés tour à tour en respectant le sens des aiguilles d’une montre.
Ordre et valeur des combinaisons au 421 :
Au 421, on respecte cet ordre : as, six, cinq, quatre, trois et deux. L’as étant le plus fort.

Voici les combinaisons du 421 par ordre de valeur. De la meilleure combinaison à la moins bonne.

Ordre des combinaisons

N°1

421

N°2

3 As

N°3

2 As – Six

N°4

3 Six

N°5

2 As – Cinq

N°6

3 Cinq

N°7

2 As – Quatre

N°8

3 Quatre

N°9

2 As – Trois

N°10

3 Trois

N°11

2 As – Deux

N°12

3 Deux

N°13

Six – Cinq – Quatre

N°14

Cinq – Quatre – Trois

N°15

Quatre – Trois – Deux

N°16

Trois – Deux – As


Comment jouer au 421 :
On joue généralement le 421 en deux manches, la « charge » et la « décharge ». L’ensemble des jetons est appelé le « pot ».

Lors de la première partie du jeu, la « charge », les joueurs vont se répartir les 21 jetons entre eux en espérant en récupérer le moins possible. Lors de la deuxième partie, la « décharge », les joueurs devront se débarrasser du plus de jetons possible.


 
Le joueur ayant remporté le jeu de dés démarrera la partie en lançant les trois dés. Pour chacun des trois dés il peut choisir de relancer ou non. S’il ne relance pas il aura effectué un seul lancer. Le joueur peut, si il le désire, relancer une deuxième et une troisième fois tout ou partie des trois dés. Ceci va influer sur le reste de la manche car les autres joueurs devront effectuer le même nombre de lancers que le premier joueur.

Ainsi, si le premier joueur à lancé trois fois les dés les autres joueurs devront faire de même. Si le deuxième joueur réussis un 421 dès son premier lancer, il devra tout de même relancer les dés pour respecter les trois lancers.

Dans certaines variantes cette règle est assouplie. En effet, lorsqu’un joueur est satisfait de sa combinaison il peut taper sur la table en disant « le bon ». Cela lui permet de valider sa combinaison sans avoir à faire le même nombre de lancer que le premier joueur. Bien sûr, le nombre maximum de lancer est toujours de trois. Ceci doit être annoncé avant le début de la partie pour que tous les joueurs soit d’accord sur les règles.

Au cours de la « charge », celui qui fait la moins bonne combinaison reçoit des jetons du « pot ». Le nombre de jetons distribué au joueur est déterminé par la meilleure combinaison (voir les valeurs des combinaisons ci-dessous).

aleur des combinaisons en jetons au 421 :
Combinaisons

Valeurs en jetons

421

10 jetons

3 As

7 jetons

2 As – Six /ou/ 3 Six

6 jetons

2 As – Cinq /ou/ 3 Cinq

5 jetons

2 As – Quatre  /ou/ 3 Quatre

4 jetons

2 As – Trois  /ou/ 3 Trois

3 jetons

2 as –deux  /ou/ 3 deux

2 jetons

Une suite (1,2,3 ou 6,5,4 par exemple)

2 jetons

Toutes les autres combinaisons (Du + au -)

1 jeton

La combinaison 2,2,1 est appelée « nénette ». C’est la plus faible des combinaisons. Peu importe la meilleure combinaison qui a été réalisée, celui qui fait une « nénette » reçoit d’office 2 jetons.

Exemple : quand la meilleure combinaison de la manche est 2 as – six, celui qui a réalisé la moins bonne combinaison se voit attribué 6 jetons.

Une fois que le « pot » est vide on peut alors commencer la deuxième manche. Lors de la « décharge » le but est d’être le premier joueur à ne plus avoir de jetons. Les règles sont les mêmes, la meilleure combinaison du tour donne ses jetons à la plus faible. Lorsqu’un joueur n’a plus de jetons la partie se termine et il est déclaré vainqueur.

Comment gagner au 421 :
Pour gagner une partie de 421, il faut être le premier joueur à ne plus avoir de jetons au terme des deux manches. Il faut savoir qu’il existe de nombreuses variantes à la règle de base. Ainsi, il est toujours possible d’ajouter des règles pour pimenter le jeu du 421.
*/ }
    Ben coudonc, t'es encore là toé ? Bon, câlisse, tu vas-tu me crisser patience ? J'ai ben d'la misère avec les colons en bedaine. T'es din patate mon gars, complètement dans le champ. Ferme-toé un peu le mâche-patate là, va prendre une marche ou quelque chose. Ça a fessé dans le dash en esti hier, j'étais paqueté en tabarnak, je suis crissement lendemain de veille.
  </div>
);

/*
Rules.propTypes = {
  isAdmin: PropTypes.bool,
};
Rules.defaultProps = {
  isAdmin: false,
};
*/

export default Rules;
