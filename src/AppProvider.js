import React, { useReducer } from "react";
import MainContext from "./MainContext";

import combineReducer from "./utils/combineReducer";

const AppProvider = (props) => {
  const initialValue = {};

  const rootReducer = combineReducer({});
  const [state, dispatch] = useReducer(rootReducer, initialValue);

  const myInitialState = {};

  return (
    <MainContext.Provider displayName="Main Context" value={myInitialState}>
      {props.children}
    </MainContext.Provider>
  );
};

export default AppProvider;
