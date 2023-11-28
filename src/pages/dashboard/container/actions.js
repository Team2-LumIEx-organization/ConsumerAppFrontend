export const types = {
  SET_SENT_PARCEL: 'SET_SENT_PARCEL',
  SET_RECIVED_PARCE: 'SET_RECIVED_PARCE'
};

const actions = {
  setSentParcels: payload => ({
    type: types.SET_SENT_PARCEL,
    payload
  }),
  setRecivedParcels: payload => ({
    type: types.SET_RECIVED_PARCE,
    payload
  })
  
};

export default actions;
