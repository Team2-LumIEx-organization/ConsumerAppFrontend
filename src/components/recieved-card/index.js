import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext";
import { Background } from '../../components/base/common'
import { StyledListItem, StyledItem } from '../../components/base/list'
import { HorizentalSpace } from '../../components/base/common'

const ReceivedCard = ({ item, title }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <StyledListItem title={title} theme={theme}>
            <StyledItem title={title} theme={theme} >
                {item.name}
            </StyledItem>
            <HorizentalSpace width={250} />
            <StyledItem title={title} theme={theme} >
                {item.delivery_status}
            </StyledItem>
            <HorizentalSpace width={350} />
            <StyledItem title={title} theme={theme} >
                {item.reciver}
            </StyledItem>
        </StyledListItem>
    )
}

export default ReceivedCard

