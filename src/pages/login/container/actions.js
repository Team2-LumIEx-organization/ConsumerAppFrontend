export const types = {
  SET_SOCKET: 'SET_SOCKET'
};

const actions = {
  setToken: payload => ({
    type: types.SET_TOKEN,
    payload
  })
};

export default actions;
