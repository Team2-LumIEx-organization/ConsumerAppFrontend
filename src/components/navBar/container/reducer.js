import { types } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload }

    default:
      return state;
  }
};

export const key = "navbar";
export default reducer;
