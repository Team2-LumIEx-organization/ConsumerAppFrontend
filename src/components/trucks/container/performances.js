import actions from "./actions";

const trucsPerformances = dispatch => {
  const setPageContext = async data => {
    console.log('data2', data)
    dispatch(actions.setPage(data))
  }
  return {
    setPageContext
  };
};

export default trucsPerformances;
