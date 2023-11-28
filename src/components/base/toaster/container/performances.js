import actions from "./actions";

const toasterPerformances = dispatch => {
  const setToasterContext = (value) => {
    dispatch(actions.setToaster(value))
  }
  const updateToasterContext = (value) => {
    dispatch(actions.updateToaster(value))
  }
  return {
    setToasterContext,
    updateToasterContext,
  };
};

export default toasterPerformances;
