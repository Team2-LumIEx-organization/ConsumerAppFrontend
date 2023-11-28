import axios from 'axios'
const { REACT_APP_API } = process.env

export const login = async data => {
  const response = await axios.post(
    `${REACT_APP_API}/auth/login`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};

export const register = async data => {
  const response = await axios.post(`${REACT_APP_API}/auth/register`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};

export const deleteAccount = async data => {
  const response = await axios.post(`${REACT_APP_API}/auth/delete`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};

