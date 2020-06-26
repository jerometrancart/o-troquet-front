export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const WEBSOCKET_DISCONNECT = 'WEBSOCKET_DISCONNECT';
export const WEBSOCKET_GET_ROOM = 'WEBSOCKET_GET_ROOM';
export const WEBSOCKET_CREATE_ROOM = 'WEBSOCKET_CREATE_ROOM';
export const WEBSOCKET_JOIN_ROOM = 'WEBSOCKET_JOIN_ROOM';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const SCROLL_DOWN = 'SCROLL_DOWN';
export const SET_MESSAGE = 'SET_MESSAGE';

export const webSocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const webSocketDisconnect = () => ({
  type: WEBSOCKET_DISCONNECT,
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

export const webSocketGetRoom = () => ({
  type: WEBSOCKET_GET_ROOM,
});

export const webSocketCreateRoom = () => ({
  type: WEBSOCKET_CREATE_ROOM,
});

export const webSocketJoinRoom = (roomId) => ({
  type: WEBSOCKET_JOIN_ROOM,
  roomId,
});
