export const types = {
  SET_TOASTER: "SET_TOASTER",
  UPDATE_TOASTER: "UPDATE_TOASTER",
};

const actions = {
  setToaster: payload => ({
    type: types.SET_TOASTER,
    payload
  }),
  updateToaster: payload => ({
    type: types.UPDATE_TOASTER,
    payload
  })
};

export default actions;
