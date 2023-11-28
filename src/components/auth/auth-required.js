import React, { useContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import { ThemeContext } from "../../context/themeContext";
import MainContext from "../../MainContext";


const AuthRequired = (props) => {
    const { theme, toggleTheme, darkThemeSelected } = useContext(ThemeContext);
    const {  token: contextToken, setTokenContext } = useContext(MainContext).login;
    let authorized = false
    const token = localStorage.getItem('token')
    
    if (token && token.length > 0) {
        authorized = true
        axios.defaults.headers.common['token'] = token
        if (contextToken.length === 0) {
            setTokenContext(token)
        }
    } else {
        if (contextToken.length !== 0) {
            setTokenContext('')
        }
    }
    
    
    return (authorized === true ? (
        props.children 
    ) : (
        <Navigate to={props.redirect} />
    )
    )
}

export default AuthRequired
