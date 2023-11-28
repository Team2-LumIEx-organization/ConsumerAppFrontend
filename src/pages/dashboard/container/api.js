import axios from 'axios'
const { REACT_APP_API } = process.env

export const createParcel = async data => {
  const response = await axios.post(`${REACT_APP_API}/parcel/`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};

export const getSentParcel = async data => {
  const response = await axios.get(`${REACT_APP_API}/parcel/sent`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};


export const getRecivedParcel = async data => {
  const response = await axios.get(`${REACT_APP_API}/parcel/recived`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};

