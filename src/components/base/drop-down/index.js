import React, { useState, useContext, useRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from "../../../context/themeContext";
import TriangleSVG from "../../../asset/triangle.svg";

const Triangle = styled.img.attrs({
    src: TriangleSVG
})`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 17px;
    height: 17px;
    transform: ${props => props.focused ? 'rotate(-180deg)' : 'rotate(-90deg)'};
    filter: ${props => props.darkThemeSelected ?
        'invert(100%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(103%) contrast(101%)' :
        'invert(76%) sepia(3%) saturate(22%) hue-rotate(321deg) brightness(81%) contrast(81%)'
    };
    transition: 200ms linear;
`

const Wrapper = styled.div`
    box-sizing: border-box;
    width: ${props => props.size === "full" ? '100%' : '232px'};
    height: 59px;
    background-color: ${props => props.theme.inputBackground}; 
    position: relative;
    outline: none;
    border-radius: 15px;
    cursor: pointer;
    z-index: ${props => props.focusedProp  ? 3 : 2};
`

const UnSelect = styled.div`
    box-sizing: border-box;
    width: ${props => props.size === "full" ? '100%' : '232px'};
    height: 59px;
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
    border-radius: 15px;
    display:${props => !props.display && 'none'};
`

const Choices = styled.div`
    box-sizing: border-box;
    width: ${props => props.size === "full" ? '100%' : '232px'};
    height: ${props => props.focused ? 59 * Math.min(4, props.choicesArrayLength + 1) + 'px' : '59px'};
    background-color: ${props => props.theme.inputBackground}; 
    position: absolute;
    top: 0vw;
    left: 0;
    border-radius: 15px;
    transition: 200ms linear;
    overflow: hidden;
`

const ScrollArea = styled.div`
    box-sizing: border-box;
    width: ${props => props.size === "full" ? 'calc(100% - 0.3vw)' : '227px'};
    height: ${props => props.focused ? 59 * Math.min(3, props.choicesArrayLength) + 'px' : '0vw'};
    background-color: ${props => props.theme.inputBackground}; 
    position: absolute;
    top: 59px;
    left: 0;
    transition: 200ms linear;
    overflow: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 6px;
        border-radius: 6px;
        background-color: ${props => props.theme.SecondaryBackground};
    }

    /* Track */
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 0.26vw ${props => props.theme.SecondaryBackground};  */
        border-radius: 6px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.borderBackground}; 
        border: 0vw solid #f4f4f4;
        border-radius: 6px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.tagBorder}; 
    }
`

const Selected = styled.div`
    box-sizing: border-box;
    width: ${props => props.size === "full" ? '100%' : '232px'};
    height: 59px;
    color: ${props => props.theme.textPrimary}; 
    font-size: 18px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    transition: 300ms linear;
`

const Choice = styled(Selected)`
    background-color: ${props => props.theme.inputBackground};
    &:hover{
        background-color: ${props => props.theme.pure};
    }
    transition: 300ms linear;
`
const Label = styled.label`
    position: absolute;
    pointer-events: none;
    top: -27px;
    left: 12px;
    font-size: 14px;
    transition: 0.3s ease all;
    color: ${props => props.focused ? props.theme.textPrimary : props.theme.textSecondary};
`
const Selector = (props) => {
    const { theme, darkThemeSelected } = useContext(ThemeContext);
    const [focused, setFocused] = useState(false)
    const wrapperRef = useRef()
    const { options, selected, setSelected, label, size } = props
    let choicesArray = []
    let selectedName = ''
    options.map((option) => {
        choicesArray.push(
            <Choice
                theme={theme}
                size={size}
                onClick={() => {
                    setSelected(option.id)
                    wrapperRef.current.blur()
                }}
            >
                {option.text || option.name}
            </Choice>
        )
        if (selected === option.id) {
            selectedName = option.symbol || option.text || option.name
        }
    })
    const onKeyDown = (e) => {
        console.log(1)
    }
    const onBlur = () => {
        setFocused(false)
    }
    const onFocus = () => {
            setFocused(true)
    }
    const onUnSelectClick = () => {
        if (focused) {
            wrapperRef.current.blur()
        }
    }

    return (
        <Wrapper
            theme={theme}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={(e) => onKeyDown(e)}
            tabIndex="1"
            focused={focused}
            focusedProp={focused}
            ref={wrapperRef}
            size={size}
        >
            <Label
                theme={theme}
                focused={focused}
            >
                {label}
            </Label>
            <Choices
                focused={focused}
                theme={theme}
                choicesArrayLength={choicesArray.length}
                size={size}
            >
                <Triangle
                    focused={focused}
                    darkThemeSelected={darkThemeSelected}
                />
                <Selected
                    theme={theme}
                    size={size}
                >
                    {selectedName}
                </Selected>
                <ScrollArea
                    focused={focused}
                    theme={theme}
                    choicesArrayLength={choicesArray.length}
                    size={size}
                >
                    {choicesArray}
                </ScrollArea>
            </Choices>
            <UnSelect
                onClick={onUnSelectClick}
                display={focused}
                size={size}
            />
        </Wrapper>
    )
}
export default Selector