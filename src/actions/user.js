export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const FINISH_LOADING = 'FINISH_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const CHECK = 'CHECK';
export const CONNECT = 'CONNECT';
export const REGISTER = 'REGISTER';
export const ALERT_SHOW = 'ALERT_SHOW';
export const GET_FRIENDS = 'GET_FRIENDS';
export const READ = 'READ';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const TOGGLE_CLOSE = 'TOGGLE_CLOSE';
export const UPDATE_USER = 'UPDATE_USER';
export const SELECT_FILE = 'SELECT_FILE';
export const UPLOAD_AVATAR = 'UPLOAD_AVATAR';


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

export const authSuccess = (token, user, userId, isAdmin) => ({
  type: AUTH_SUCCESS,
  token,
  user,
  isAdmin,
});

export const logout = () => ({
  type: LOGOUT,
});

export const check = () => ({
  type: CHECK,
});

export const connect = () => ({
  type: CONNECT,
});

export const register = () => ({
  type: REGISTER,
});

export const alertShow = (show, variant, textAlert) => ({
  type: ALERT_SHOW,
  show,
  variant,
  textAlert,
});

export const getFriends = (friends) => ({
  type: GET_FRIENDS,
  friends,
});

export const read = () => ({
  type: READ,
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const toggleClose = () => ({
  type: TOGGLE_CLOSE,
});

export const updateUser = () => ({
  type: UPDATE_USER,
});

export const selectFile = (evt) => ({
  type: SELECT_FILE,
  evt,
});

export const uploadAvatar = () => ({
  type: UPLOAD_AVATAR,
});
