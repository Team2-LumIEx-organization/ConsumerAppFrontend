import { types } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, token: action.payload }

    default:
      return state;
  }
};

export const key = "login";
export default reducer;
