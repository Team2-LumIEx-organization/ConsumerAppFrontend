import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from "../../../context/themeContext";

const StyledButton = styled.div`
    margin-top: ${props => (props.marginTop ? props.marginTop + 'px' : '0')}; 
    font-size: ${props => props.size === 'larg' ? '26px' : props.size === 'small' ? '12px' : '18px'};
    transition: 0.4s;
    border: none;
    display: flex;
    width: fit-content;
    align-items: center;
    padding: ${props => props.size === 'larg' ? '19px 27px' : props.size === 'small' ? '8px 12px' : '11px 16px'};
    border-radius: ${props => props.size === 'larg' ? '36px' : props.size === 'small' ? '18px' : '23px'};
    color: ${props => props.deActive ? props.theme.textDisabled :
        props.type === 'secondary' ? props.theme.textPrimary :'white'};
    background-color: ${props => props.deActive ? props.theme.inputBackground : props.type === 'secondary' ?
    'unset' : props.theme.blueColorPrimary};
    &:hover {
        &:not(:disabled) {
            cursor: ${props => props.deActive ? 'not-allowed' : 'pointer'};
            background-color: ${props => props.deActive || props.type === 'secondary' ?
        props.theme.inputBackground : props.theme.blueColorPrimaryHover};
            color: ${props => props.deActive ? props.theme.textDisabled :
        props.type === 'secondary' ?  props.theme.textPrimary : 'white'};
        }
    }
`
const Button = (props) => {
    const { theme, darkThemeSelected } = useContext(ThemeContext);
    const { type, size, deActive, image } = props
    return (
        <StyledButton
            theme={theme}
            size={size}
            type={type}
            deActive={deActive}
            marginTop={props.marginTop}
            onClick={!deActive && props.onClick}
            backgroundColor={props.backgroundColor}
        >
            {props.text}
        </StyledButton>
    )
}

export default Button