export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const FINISH_LOADING = 'FINISH_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const CHECK = 'CHECK';

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const authSuccess = (token, user) => ({
  type: AUTH_SUCCESS,
  token,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const check = () => ({
  type: CHECK,
});
