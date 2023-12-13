import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Background } from "../../components/base/common";
import { StyledListItem, StyledItem } from "../../components/base/list";
import { HorizentalSpace } from "../../components/base/common";
import styled from "styled-components";
import Truck from "../../asset/trucks/2.svg";

const StyledLogo = styled.img`
  width: 60px;
  margin-right: 60px;
  transform: scaleX(-1);
  filter: ${(props) =>
    props.darkThemeSelected
      ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(103%) contrast(101%)"
      : "invert(76%) sepia(3%) saturate(22%) hue-rotate(321deg) brightness(81%) contrast(81%)"};
`;

const ReceivedCard = ({ item, title, onClick }) => {
  const { darkThemeSelected, theme } = useContext(ThemeContext);

  return (
    <StyledListItem onClick={onClick} title={title} theme={theme}>
      <StyledItem title={title} theme={theme}>
        {item.name}
      </StyledItem>
      <HorizentalSpace width={250} />
      <StyledItem title={title} theme={theme}>
        {item.delivery_status}
      </StyledItem>
      <HorizentalSpace width={350} />
      <StyledItem title={title} theme={theme}>
        {item.sender.email}
      </StyledItem>
      <HorizentalSpace width={350} />
      {!title && (
        <StyledLogo darkThemeSelected={darkThemeSelected} src={Truck} />
      )}
    </StyledListItem>
  );
};

export default ReceivedCard;
