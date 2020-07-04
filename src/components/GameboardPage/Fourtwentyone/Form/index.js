import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { Send } from 'react-feather';
import './style.scss';


const Form = ({ inputValue, sendMessage, setMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };
  const handleChange = (event) => {
    // je veux intéragir pour modifier la valeur du champ quand j'écris dans le champ
    // dans le composant on réagit à un évenement
    // on exécute une fonction passée depuis le container
    // on dispatch une action
    // elle arrive dans le reducer
    // on la traduit vers une modification du state
    // modifier le state déclenche tous les subscribes mis en place par react redux dans mes container
    // le state est à nouveau lu et les props rediffusées
    // l'inputValue qui arrive dans ce composant a changé
    // console.log('je veux changer la valeur du champs, voici la nouvelle valeur : ', event.target.value);
    setMessage(event.target.value);
    // inputValue = event.target.value,
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="chatroom-form"
    >
      <input
        className="chatroom-form-input"
        type="text"
        placeholder="Type your text here ..."
        value={inputValue}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="chatroom-form-button"
      ><Send strokeWidth="3" />
      </button>
    </form>
  );
};


Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Form;
