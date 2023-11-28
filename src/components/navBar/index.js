import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from "../../context/themeContext";
import MainContext from "../../MainContext";
import axios from 'axios'
import Button from '../base/button';
import Tab from '../base/tab';


const NavWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 80px;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: ${props => props.theme.textPrimary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`

const SideWrapper = styled.div`
    display: flex;
    align-items: center;
`

function Navbar() {
    const { darkThemeSelected, theme } = useContext(ThemeContext);
    const { setTokenContext } = useContext(MainContext).login;
    const [selectedTab, setSelectedTab] = useState(0)
    const onLogoutClick = () => {
        localStorage.removeItem('token')
        axios.defaults.headers.common.token = ''
        setTokenContext('')
    }
    useEffect(() => {
        const currentSubUrl = window.location.pathname;
        if(currentSubUrl.startsWith('/dashboard')){
            setSelectedTab(1)
        }
        if(currentSubUrl.startsWith('/send-parcel')){
            setSelectedTab(2)
        }
        if(currentSubUrl.startsWith('/setting')){
            setSelectedTab(3)
        }
      }, [window.location.pathname]);
    return (
        <NavWrapper theme={theme}>
            <SideWrapper>
            <Tab
                    id={1}
                    selectedTab={selectedTab ===1}
                    link='/dashboard'
                    name='Dashboard'
                />
                <Tab
                    id={2}
                    selectedTab={selectedTab ===2}
                    link='/send-parcel'
                    name='New Parcel'
                />
                <Tab
                    id={3}
                    selectedTab={selectedTab ===3}
                    link='/setting'
                    name='Setting'
                />
            </SideWrapper>
            <SideWrapper>
                <Button
                    onClick={onLogoutClick}
                    text='Log out'
                    size='small'
                    type='secondary'
                />
            </SideWrapper>
        </NavWrapper>
    )
}

export default Navbar