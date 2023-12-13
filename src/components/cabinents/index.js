import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { CabinentBox } from "../base/cabinent";
import styled from "styled-components";
import Modal from "../../components/base/modal";

const Title = styled.div`
  position: Relative;
  color: ${(props) => props.theme.textPrimary};
  font-size: 24px;
  margin: auto;
  width: fit-content;
  padding-top: 50px;
`;

const Text = styled.div`
  position: Relative;
  color: ${(props) => props.theme.textPrimary};
  font-size: 16px;
  margin: auto;
  width: fit-content;
  margin-top: 20px;
`;

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CabinentModal = ({
  onCabinentClick,
  seLectedLocation,
  open,
  toggle,
  locations,
}) => {
  const { theme } = useContext(ThemeContext);
  console.log("locations", locations[2]);
  return (
    <Modal open={open} toggle={toggle}>
      <Title theme={theme}>Select an empty Cabinent</Title>
      <Text theme={theme}>
        Cabinents Are at Location {seLectedLocation.location}
      </Text>
      <StyledCard>
        {locations.length &&
          locations[Number(seLectedLocation.location) - 1] &&
          locations[Number(seLectedLocation.location) - 1].cabinents.map(
            (cabinent) => {
              return (
                <CabinentBox
                  theme={theme}
                  disabled={cabinent.occupied}
                  onClick={() => onCabinentClick(cabinent.id)}
                >
                  Cabinent {cabinent.id}
                </CabinentBox>
              );
            }
          )}
      </StyledCard>
    </Modal>
  );
};

export default CabinentModal;
