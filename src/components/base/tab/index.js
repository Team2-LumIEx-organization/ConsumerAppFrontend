import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { ThemeContext } from "../../../context/themeContext";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledTab = styled.div`
    position: relative;
    padding-left: 20px;
    font-size: 16px;
    color: ${props => props.selectedTab ? props.theme.textPrimary : props.theme.textSecondary};
    transition: 200ms linear;
    &:hover{
        color: ${props => props.theme.textPrimary};
    }
`

const Tab = ({ id, selectedTab, link, name }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <StyledLink to={link}>
            <StyledTab theme={theme} selectedTab={selectedTab}>{name}</StyledTab>
        </StyledLink>
    )
} 

export default Tab