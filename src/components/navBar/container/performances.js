import actions from "./actions";
import {
  getNotifications,
  removeNotifications
} from "./api";

const navbarPerformances = dispatch => {
  const getNotificationsContext = async data => {
    try {
      const result = await getNotifications(data);
      if (result) {
        dispatch(actions.setNotifications(result))
      }
    } catch (e) {
      return {status: 400, message: e.response.data}
    }
  }
  const removeNotificationsContext = async data => {
    try {
      const result = await removeNotifications(data);
      if (result) {
        getNotificationsContext()
      }
    } catch (e) {
      return {status: 400, message: e.response.data}
    }
  }
  
  return {
    getNotificationsContext,
    removeNotificationsContext
  };
};

export default navbarPerformances;
