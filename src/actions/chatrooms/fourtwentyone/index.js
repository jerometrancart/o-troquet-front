export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const WEBSOCKET_DISCONNECT = 'WEBSOCKET_DISCONNECT';
export const WEBSOCKET_GET_ROOM = 'WEBSOCKET_GET_ROOM';
export const WEBSOCKET_CREATE_ROOM = 'WEBSOCKET_CREATE_ROOM';
export const WEBSOCKET_JOIN_ROOM = 'WEBSOCKET_JOIN_ROOM';
export const WEBSOCKET_LEAVE_ROOMS = 'WEBSOCKET_LEAVE_ROOMS';
export const WEBSOCKET_LISTEN_ROOM = 'WEBSOCKET_LISTEN_ROOM';
export const CHECK_ROOM = 'CHECK_ROOM';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const SCROLL_DOWN = 'SCROLL_DOWN';
export const SET_MESSAGE = 'SET_MESSAGE';
export const CLICK_HOME = 'CLICK_HOME';


export const webSocketConnect = (roomId, roomHasError) => ({
  type: WEBSOCKET_CONNECT,
  roomId,
  roomHasError,
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

export const webSocketGetRoom = (name) => ({
  type: WEBSOCKET_GET_ROOM,
  name,
});

export const webSocketCreateRoom = () => ({
  type: WEBSOCKET_CREATE_ROOM,
});

export const webSocketJoinRoom = (roomId) => ({
  type: WEBSOCKET_JOIN_ROOM,
  roomId,
});

export const webSocketLeaveRooms = (user) => ({
  type: WEBSOCKET_LEAVE_ROOMS,
  user,
});

export const webSocketListenRoom = (room) => ({
  type: WEBSOCKET_LISTEN_ROOM,
  room,
});

export const checkRoom = () => ({
  type: CHECK_ROOM,
});

export const clickHome = () => ({
  type: CLICK_HOME,
});
