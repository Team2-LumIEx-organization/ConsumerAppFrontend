import React, { useReducer } from "react";
import MainContext from "./MainContext";

import toasterReducer, {
  key as toasterKey,
} from "./components/base/toaster/container/reducer";

import ToasterPerformances from "./components/base/toaster/container/performances";

import combineReducer from "./utils/combineReducer";

const AppProvider = (props) => {
  const initialValue = {
    [toasterKey]: {
      toasterMessages: [],
    },
  };

  const rootReducer = combineReducer({
    [toasterKey]: toasterReducer,
  });
  const [state, dispatch] = useReducer(rootReducer, initialValue);

  const myInitialState = {
    ...state,
    [toasterKey]: {
      ...state[toasterKey],
      ...ToasterPerformances(dispatch),
    },
  };

  return (
    <MainContext.Provider displayName="Main Context" value={myInitialState}>
      {props.children}
    </MainContext.Provider>
  );
};

export default AppProvider;
