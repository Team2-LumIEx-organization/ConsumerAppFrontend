import { types } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_TOASTER:
      return { ...state, toasterMessages: action.payload };
    case types.UPDATE_TOASTER:
      return { ...state, toasterMessages: [{...action.payload, key: Math.random()} , ...state.toasterMessages] };
    default:
      return state;
  }
};

export const key = "toasters";
export default reducer;
