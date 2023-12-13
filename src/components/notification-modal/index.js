import React, { useContext, useEffect } from 'react'
import { ThemeContext } from "../../context/themeContext";
import MainContext from "../../MainContext";

import Modal from '../../components/base/modal';
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 50px;
    color: ${props => props.theme.textPrimary};
`
const Title = styled.div`
    align-items: center;
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: bold;
    width: 100%;
`
const StyledItem = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    font-size: 14px;
    margin-bottom: 24px;
`
const StyledTitleItem = styled.span`
    margin-right: 4px;
    font-size: 16px;
    font-weight: bold;
`


const CardModal = ({ open, toggle, notifications }) => {
    const { key, getKeyContext } = useContext(MainContext).dashboard;
    const { theme } = useContext(ThemeContext);
console.log(notifications)
    return (
        <Modal open={open} toggle={toggle}>
            <StyledWrapper theme={theme}>
                <Title >
                    {notifications.length ? 'You have parcels to pickup' : 'No parcel to pickup'}
                </Title>
                {notifications.map((notification) => {
                    return (<>
                        <StyledItem>
                            <StyledTitleItem>Name:</StyledTitleItem>
                            {notification.name}
                        </StyledItem>
                        <StyledItem>
                            <StyledTitleItem>Location:</StyledTitleItem>
                            {notification.reciver_location}
                        </StyledItem>
                        <StyledItem>
                            <StyledTitleItem>Cabinent:</StyledTitleItem>
                            {notification.reciver_cabinent}
                        </StyledItem>
                    </>)
                })}
            </StyledWrapper>
        </Modal>
    )
}

export default CardModal

