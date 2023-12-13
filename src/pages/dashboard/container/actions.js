export const types = {
  SET_SENT_PARCEL: "SET_SENT_PARCEL",
  SET_RECIVED_PARCE: "SET_RECIVED_PARCE",
  SET_KEY: "SET_KEY",
  SET_LOCATIONS: "SET_LOCATIONS",
};

const actions = {
  setSentParcels: (payload) => ({
    type: types.SET_SENT_PARCEL,
    payload,
  }),
  setRecivedParcels: (payload) => ({
    type: types.SET_RECIVED_PARCE,
    payload,
  }),
  setKey: (payload) => ({
    type: types.SET_KEY,
    payload,
  }),
  setLocations: (payload) => ({
    type: types.SET_LOCATIONS,
    payload,
  }),
};

export default actions;
