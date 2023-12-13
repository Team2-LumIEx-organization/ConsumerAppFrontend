export const types = {
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
};

const actions = {
  setNotifications: payload => ({
    type: types.SET_NOTIFICATIONS,
    payload
  })
};

export default actions;
