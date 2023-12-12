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
    width: 40%;
    font-size: 14px;
    margin-bottom: 24px;
`
const StyledTitleItem = styled.span`
    margin-right: 4px;
    font-size: 16px;
    font-weight: bold;
`


const CardModal = ({ open, toggle, selectedParcel, selectedTab }) => {
    const { key, getKeyContext } = useContext(MainContext).dashboard;
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        if(selectedParcel.sender_location){
            let location
            let cabinent
            if(selectedTab ===1){
                location = selectedParcel.reciver_location
                cabinent = selectedParcel.reciver_cabinent
            } else {
                location = selectedParcel.sender_location
                cabinent = selectedParcel.sender_cabinent
            }
            getKeyContext({location, cabinent})
        }
    }, [selectedParcel])
    
    return (
        <Modal open={open} toggle={toggle}>
            {selectedParcel && selectedParcel.sender &&
                <StyledWrapper theme={theme}>
                    <Title >
                        Parcel Info
                    </Title>
                    <StyledItem>
                        <StyledTitleItem>Sender:</StyledTitleItem>
                        {selectedParcel.sender.email}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Reciver:</StyledTitleItem>
                        {selectedParcel.reciver.email}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Name:</StyledTitleItem>
                        {selectedParcel.name}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>size:</StyledTitleItem>
                        {selectedParcel.size}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Mass:</StyledTitleItem>
                        {selectedParcel.mass}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Sender Location:</StyledTitleItem>
                        {selectedParcel.sender_location}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Sender Cabinent:</StyledTitleItem>
                        {selectedParcel.sender_cabinent}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Reciver Location:</StyledTitleItem>
                        {selectedParcel.reciver_location}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Reciver Cabinent:</StyledTitleItem>
                        {selectedParcel.reciver_cabinent}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Address:</StyledTitleItem>
                        {selectedParcel.address}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>Phone Number:</StyledTitleItem>
                        {selectedParcel.phone_number}
                    </StyledItem>
                    <StyledItem>
                        <StyledTitleItem>delivery_status:</StyledTitleItem>
                        {selectedParcel.delivery_status}
                    </StyledItem>
                    {key && <StyledItem>
                        <StyledTitleItem>Cabinent key:</StyledTitleItem>
                        {key}
                    </StyledItem>}
                </StyledWrapper>
            }
        </Modal>
    )
}

export default CardModal

