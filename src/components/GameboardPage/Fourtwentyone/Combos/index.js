import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Combos = () => (

  <div className="theCombos">
    Valeurs en jetons
    421

    10 jetons

    3 As

    7 jetons

    2 As – Six /ou/ 3 Six

    6 jetons

    2 As – Cinq /ou/ 3 Cinq

    5 jetons

    2 As – Quatre /ou/ 3 Quatre

    4 jetons

    2 As – Trois /ou/ 3 Trois

    3 jetons

    2 as – deux /ou/ 3 deux

    2 jetons

    Une suite (1,2,3 ou 6,5,4 par exemple)

    2 jetons

    Toutes les autres combinaisons (Du + au -)
    1 jeton
    La combinaison 2,2,1 est appelée « nénette ». C’est la plus faible des combinaisons. Peu importe la meilleure combinaison qui a été réalisée, celui qui fait une « nénette » reçoit d’office 2 jetons.
  </div>

);
 
 /*
 Combos.propTypes = {
   isAdmin: PropTypes.bool,
 };
 Combos.defaultProps = {
   isAdmin: false,
 };
 */
 
 export default Combos;
