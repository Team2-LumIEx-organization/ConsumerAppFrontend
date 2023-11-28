import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from "../../../context/themeContext";
import EyeSVG from '../../../asset/eye.svg'
import Button from '../button'

const EyeIcon = styled.img.attrs({
    src: EyeSVG
})`
    position: absolute;
    width: 38px;
    height: 38px;
    top: calc(50% - 19px);
    right:  28.815px;
    cursor: pointer;
    filter: ${props => props.darkThemeSelected ?
        'invert(100%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(103%) contrast(101%)' :
        'invert(76%) sepia(3%) saturate(22%) hue-rotate(321deg) brightness(81%) contrast(81%)'
    };
`

const Wrapper = styled.div`
    position: relative;
`

const StyledInput = styled.input`
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.inputBackground};
    border: none;
    color: ${props => props.theme.textPrimary};
    padding: ${props => props.size === 'larg' ? '30px' : props.size === 'small' ? '12px' : '19px'};
    box-sizing: border-box;
    font-size: ${props => props.size === 'larg' ? '27px' : props.size === 'small' ? '26px' : '18px'};
    border-radius: ${props => props.size === 'larg' ? '25px' : props.size === 'small' ? '11px' : '16px'};
    text-align: left;
    direction: ltr;
    box-shadow: 0 0 0 0.2rem ${props => (props.validate === false ? 'red' : 'rgba(94,95,98,0)')};
    ::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
    &:active,
    &:focus {
        border: none;
        background-color: ${props => props.theme.inputBackground};
        border-color: red;
        color:${props => props.theme.textPrimary};
        opacity: 1;
        outline:0px;
        box-shadow: 0 0 0 0.2rem ${props => (props.validate === false ? 'red' : 'rgb(94,95,98)')};
    } 
`

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  top: ${props => props.size === 'larg' ? '27px' : props.size === 'small' ? '9px' : '19px'};
  left: ${props => props.size === 'larg' ? '30px' : props.size === 'small' ? '12px' : '19px'};
  transition: 0.3s ease all;
  font-size: ${props => props.size === 'larg' ? '27px' : props.size === 'small' ? '26px' : '18px'};
  color: ${props => !props.validate ? props.theme.redColor : props.theme.textSecondary};

  ${StyledInput}:focus ~ & {
    top: ${props => props.size === 'larg' ? '-34px' : props.size === 'small' ? '-21px' : '-39px'};
    left: ${props => props.size === 'larg' ? '19px' : props.size === 'small' ? '7px' : '12px'};
    font-size: ${props => props.size === 'larg' ? '18px' : props.size === 'small' ? '10px' : '26px'};
    opacity: 1;
    color: ${props => !props.validate ? props.theme.redColor : props.theme.textPrimary};
  }
`
const OptionalStyle = styled.span`
${StyledInput}:focus ~ & {
    display:none; 
    color:blue;
  }
`

const ErrorMsg = styled.label`
    position: absolute;
    pointer-events: none;
    transition: 0.3s ease all;
    bottom: ${props => props.size === 'larg' ? '-27px' : props.size === 'small' ? '-15px' : '-21px'};
    right: ${props => props.size === 'larg' ? '19px' : props.size === 'small' ? '7px' : '12px'};
    font-size: ${props => props.size === 'larg' ? '16px' : props.size === 'small' ? '8px' : '10px'};
    opacity: ${props => props.validate ? '0' : '1'};
    transition: 0.3s ease all;
    color: ${props => props.theme.redColor};
`

const InfoSign = styled.div`
    position: absolute;
    right: ${props => props.size === 'larg' ? '19px' : props.size === 'small' ? '10px' : '15px'};
    top: 50%;
    transform: translateY(-50%);
    width: ${props => props.size === 'larg' ? '19px' : props.size === 'small' ? '10px' : '15px'};
    height: ${props => props.size === 'larg' ? '19px' : props.size === 'small' ? '10px' : '15px'};
    border-radius: 50%;
    display: ${props => props.display ? 'block' : 'none'};
    transition: 0.3s ease all;
    background-color: ${props => props.theme.textPrimary + '80'};
    z-index: ${props => props.focused ? '99' : '1'};
    &:hover{
        background-color: ${props => props.theme.textPrimary};
    }
`

const InfoText = styled.div`
    position: absolute;
    left: 50%;
    top: 200%;
    width: 169px;
    transform: translateX(-50%)${props => props.focused ? 'scale(1)' : 'scale(0.3)'};
    transform-origin: 50% 0%;
    border-radius: 17px;
    opacity: ${props => props.focused ? '1' : '0'};
    visibility: ${props => props.focused ? 'visible' : 'hidden'};
    transition: 0.3s ease all;
    background-color: ${props => props.theme.SecondaryBackground};
    color: ${props => props.theme.textPrimary};
    box-sizing: border-box;
    padding: 19px;
    font-size: 12px;
    line-height: 1.7;
`
const StyledDiv = styled.div`
    margin-left: 44px;
`
const Input = (props) => {
    const { theme, darkThemeSelected } = useContext(ThemeContext);
    const [showPassword, setShowPassword] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const infoRef = useRef()
    const {
        placeholder,
        type,
        name,
        value,
        validate,
        errMsg,
        optional,
        info,
        infoMessage,
        infoLink,
    } = props
    const onEyeClick = () => {
        setShowPassword(!showPassword)
    }
    const toggleInfo = (e, value) => {
        if (value) {
            if (!showInfo) {
                infoRef.current.focus()
                setShowInfo(value)
            } else {
                setShowInfo(false)
            }
        } else {
            if (!infoRef.current.contains(e.relatedTarget)) {
                setShowInfo(value)
            }
        }
    }
    useEffect(() => {
        if (showInfo) {
        }
    }, [showInfo])
    return (
        <Wrapper
            style={props.size === 'larg' ? { width: '428px', height: '87px' } :
                props.size === 'small' ? { width: '179px', height: '38px' } :
                    props.size === 'long' ? { width: '348px', height: '59px' } :
                        props.size === 'full' ? { width: '100%', height: '59px' } :
                            props.size === 'payment' ? { width: '660px', height: '59px' } :
                                { width: '232px', height: '59px' }}
        >
            <StyledInput
                theme={theme}
                size={props.size}
                autofocus={props.autofocus}
                inputType={props.width}
                align={props.align}
                type={showPassword ? 'text' : type}
                name={name}
                onKeyDown={props.onKeyDown}
                validate={validate}
                info={info}
                onChange={event => {
                    props.onChange(props.inputTarget, event.target.value)
                }}
                value={value}
                style={props.size === 'larg' ? { width: '428px', height: '87px' } :
                    props.size === 'small' ? { width: '179px', height: '38px' } :
                        props.size === 'long' ? { width: '348px', height: '59px' } :
                            props.size === 'full' ? { width: '100%', height: '59px' } :
                                props.size === 'payment' ? { width: '660px', height: '59px' } :
                                    { width: '232px', height: '59px' }}
            />
            <Label
                style={
                    value !== '' ? {
                        top: props.size === 'larg' ? '-34px' : props.size === 'small' ? '-21px' : '-34px',
                        left: props.size === 'larg' ? '19px' : props.size === 'small' ? '7px' : '12px',
                        fontSize: props.size === 'larg' ? '18px' : props.size === 'small' ? '8px' : '26px'
                    } : {}
                }
                theme={theme}
                inputType={props.width}
                validate={validate}
                size={props.size}
            >
                {placeholder}
                <OptionalStyle>
                    {(value === '' && props.optional ? props.optional : '')}
                </OptionalStyle>
            </Label>
            <ErrorMsg
                theme={theme}
                size={props.size}
                validate={validate}
                inputType={props.width}
            >
                {props.errMsg}
            </ErrorMsg>
            {type && <EyeIcon darkThemeSelected={darkThemeSelected} onClick={onEyeClick} />}
            <InfoSign
                tabIndex="1"
                onClick={(e) => toggleInfo(e, true)}
                onBlur={(e) => toggleInfo(e, false)}
                display={info}
                theme={theme}
                size={props.size}
                focused={showInfo}
            >
                <InfoText
                    focused={showInfo}
                    theme={theme}
                    ref={infoRef}
                    onClick={(e) => { e.stopPropagation(); }}
                >
                    {infoMessage}
                    {
                        infoLink &&
                        <StyledDiv>
                            <a
                                target='_blank'
                                href={`https://${infoLink}`}
                                style={{ textDecoration: 'none', PointerEvent: 'none' }}
                            >
                                <Button
                                    onClick={() => console.log('')}
                                    marginTop={0.56}
                                    text='Learn more'
                                    size='small'
                                    type='secondary'
                                />
                            </a>
                        </StyledDiv>
                    }
                </InfoText>
            </InfoSign>
        </Wrapper>
    )
}

export default Input
