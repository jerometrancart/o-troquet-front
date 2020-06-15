const authenticationURI;

axios.post(`http://${authenticationURI}login`, {
        email: state.email,
        password: state.password,
      })
        .then((response) => {
          console.log('response', response.data);
          // j'ai le pseudo fourni par l'api
          // mon intention : ranger ce pseudo dans le state
          // je vais dispatcher une action
          const actionToSavePseudo = change('pseudo', response.data);
          store.dispatch(actionToSavePseudo);
        })
        .catch((error) => {
          console.error(error);
        });
