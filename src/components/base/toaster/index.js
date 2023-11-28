import React, { useContext } from 'react'
import styled from 'styled-components'
import MainContext from "../../../MainContext";
import { ThemeContext } from "../../../context/themeContext";
import ErrorSVG from '../../../asset/toaster/error.svg'
import InfoSVG from '../../../asset/toaster/info.svg'
import SuccessSVG from '../../../asset/toaster/success.svg'
import WarnningSVG from '../../../asset/toaster/warnning.svg'
import ToasterComponent from './toater-component'

const ErrorIcon = styled.img.attrs({
    src: ErrorSVG
})`
    width: 3.489vw;
    height: 3.489vw;
    margin-left: 1.56vw;
    margin-right: 1.04vw;
    position: relative;
`

const InfoIcon = styled.img.attrs({
    src: InfoSVG
})`
    width: 3.489vw;
    height: 3.489vw;
    margin-left: 1.56vw;
    margin-right: 1.04vw;
    position: relative;
`

const SuccessIcon = styled.img.attrs({
    src: SuccessSVG
})`
    width: 3.489vw;
    height: 3.489vw;
    margin-left: 1.56vw;
    margin-right: 1.04vw;
    position: relative;
`

const WarnningIcon = styled.img.attrs({
    src: WarnningSVG
})`
    width: 3.489vw;
    height: 3.489vw;
    margin-left: 1.56vw;
    margin-right: 1.04vw;
    position: relative;
`

const Wrapper = styled.div`
    position: fixed;
    top: 4.01vw;
    right: 1.0416vw;
    width: 25.52vw;
    z-index: 100000;
`


const ToasterBox = (props) => {
    const { toasterMessages, setToasterContext } = useContext(MainContext).toasters;
    const { theme } = useContext(ThemeContext);
    const { blueColorPrimary, redColor, greenColor, yellowColor } = theme;

    let content = []
    toasterMessages.map((toasterMessage, index) => {
        const toasterType = toasterMessage.type === 'error' ? { backgroundColor: redColor, icon: <ErrorIcon/> } :
            toasterMessage.type === 'info' ? { backgroundColor: blueColorPrimary, icon: <InfoIcon/> } :
                toasterMessage.type === 'success' ? { backgroundColor: greenColor, icon: <SuccessIcon/> } :
                    { backgroundColor: yellowColor, icon: <WarnningIcon/> }
        content.push(
            <ToasterComponent backgroundColor={toasterType.backgroundColor} toastIndex={index} key={toasterMessage.key}>
                {toasterType.icon}<div style={{position:'relative'}}>{toasterMessage.message}</div>
            </ToasterComponent>
        )

    })
    return (
        <Wrapper
            theme={theme}
            selected={props.selected}
            onClick={props.onClick}
        >
            {content}
        </Wrapper>
    )
}

export default ToasterBox
