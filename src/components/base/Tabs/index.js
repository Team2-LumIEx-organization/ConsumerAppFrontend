import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { ThemeContext } from "../../../context/themeContext";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledTab = styled.div`
    position: relative;
    padding-left: 20px;
    font-size: 16px;
    color: ${props => props.selected ? props.theme.textPrimary : props.theme.textSecondary};
    transition: 200ms linear;
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.textPrimary};
    }
`

const Tabs = ({ selectedTab, tabs, onTabClick }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Wrapper>
            {tabs.map((item) => {
                return(<StyledTab theme={theme} onClick={() => onTabClick(item.id)} selected={item.id === selectedTab}>{item.name}</StyledTab>)
            })}
        </Wrapper>
    )
}

export default Tabs