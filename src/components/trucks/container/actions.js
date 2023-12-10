export const types = {
  SET_PAGE: 'SET_PAGE'
};

const actions = {
  setPage: payload => ({
    type: types.SET_PAGE,
    payload
  })
};

export default actions;
