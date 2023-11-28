import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import MainContext from "../../../MainContext";
import CancelButtonSVG from '../../../asset/cancel-button.svg'

export const CancelButtonIcon = styled.img.attrs({
    src: CancelButtonSVG
})`
    width: 1.197vw;
    height: 1.197vw;
    cursor: pointer;
    position: absolute;
    top: calc(50%);
    right: 2.135vw;
    transform: translate(0 , -50%);
    -webkit-transition: 200ms linear;
    -ms-transition: 200ms linear;
    transition: 200ms linear;
`

const Wrapper = styled.div`
    position: relative;
    width: 25.52vw;
    height: 6.51vw;
    border-radius: 2.395vw;
    margin-bottom: 0.781vw;
    background-color: ${props => props.backgroundColor + '99'};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 1.25vw;
    color: white;
    overflow: hidden;
`

const TimerBack = styled.div`
    position: absolute;
    width: ${props => 100 - props.timer * 20 + '%'};
    height: 6.51vw;
    background-color: ${props => props.backgroundColor + '99'};
`

const ToasterComponent = (props) => {
    const { toasterMessages, setToasterContext } = useContext(MainContext).toasters;
    const [timer, setTimer] = useState(5);
    const [mouseHover, setMouseHover] = useState(false);
    const mountedRef = useRef(false)

    useEffect(() => {
        if(mouseHover){
            mountedRef.current = true
        } else {
            mountedRef.current = false
            setTimerFunc(5)
        }
    }, [mouseHover])
    useEffect(() => {
        if(timer <= 0){
            onDeleteClick()
        }
    }, [timer])
    const setTimerFunc = (val) => {
        if (mountedRef.current) return null
        setTimer(val - 0.1)
        if (val  > 0) {
            setTimeout(() => {
                setTimerFunc(val - 0.1)
            }, 50)
        } 
    }
    const onDeleteClick = () => {
        let helper = [...toasterMessages]
        helper.splice(props.toastIndex , 1)
        setToasterContext(helper)
    }
    
    return (
        <Wrapper
            backgroundColor={props.backgroundColor}
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
        >
            <TimerBack timer={timer} backgroundColor={props.backgroundColor}></TimerBack>
            {props.children}
            <CancelButtonIcon onClick={onDeleteClick}/>
        </Wrapper>
    )
}

export default ToasterComponent
