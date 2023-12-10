import { types } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_PAGE:
      return { ...state, page: action.payload }

    default:
      return state;
  }
};

export const key = "trucks";
export default reducer;
