export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const SCROLL_DOWN = 'SCROLL_DOWN';
export const SET_MESSAGE = 'SET_MESSAGE';

export const webSocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const scrollDown = () => ({
  type: SCROLL_DOWN,
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  message,
});
