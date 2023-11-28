import actions from "./actions";
import {
  createParcel,
  getSentParcel,
  getRecivedParcel,
} from "./api";

const dashboardformances = dispatch => {
  const createParcelContext = async data => {
    try {
      const result = await createParcel(data);
      if (result) {
        // dispatch(actions.setParcel(result.token))
      }
    } catch (e) {
      return {status: 400, message: e.response.data}
    }
  }
  const getSentParcelsContext = async data => {
    try {
      const result = await getSentParcel(data);
      if (result) {
        dispatch(actions.setSentParcels(result))
      }
    } catch (e) {
      console.error(e);
    }
  }
  const getRecivedParcelsContext = async data => {
    try {
      const result = await getRecivedParcel(data);
      if (result) {
        dispatch(actions.setRecivedParcels(result))
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {
    createParcelContext,
    getSentParcelsContext,
    getRecivedParcelsContext
  };
};

export default dashboardformances;
