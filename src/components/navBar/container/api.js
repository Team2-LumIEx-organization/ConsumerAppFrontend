import axios from 'axios'
const { REACT_APP_API } = process.env

export const getNotifications = async data => {
  const response = await axios.get(`${REACT_APP_API}/parcel/notifications`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};

export const removeNotifications = async data => {
  const response = await axios.get(`${REACT_APP_API}/parcel/remove-notifications`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};

