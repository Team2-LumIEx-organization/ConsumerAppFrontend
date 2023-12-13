import { types } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_SENT_PARCEL:
      return { ...state, sentParcels: action.payload };

    case types.SET_RECIVED_PARCE:
      return { ...state, recivedParcels: action.payload };

    case types.SET_KEY:
      return { ...state, key: action.payload };

    case types.SET_LOCATIONS:
      return { ...state, locations: action.payload };

    default:
      return state;
  }
};

export const key = "dashboard";
export default reducer;
