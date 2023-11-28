import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import MainContext from "../../MainContext";

const RedirectAuthorized = (props) => {
    const {  token: contextToken, setTokenContext } = useContext(MainContext).login;
    const token = localStorage.getItem('token')
    let authorized = false
    if (token && token.length > 0) {
        authorized = true
        axios.defaults.headers.common.token = token
        if(contextToken.length === 0 ){
            setTokenContext(token)
        }
    }
    return (authorized === false ? (
        props.children
    ) : (
        <Navigate to={props.redirect} />
    )
    )
}

export default RedirectAuthorized
