import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../context/themeContext";

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  opacity: ${(props) => (props.open ? "0.95" : "0")};
  backdrop-filter: ${(props) => (props.open ? "blur( 4px )" : "blur( 0px )")};
  -webkit-backdrop-filter: ${(props) =>
    props.open ? "blur( 4px )" : "blur( 0px )"};
  overflow: auto;
  overflow-x: hidden;
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
`;

const CloseWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const StyledContentWrapper = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  position: relative;
  width: 700px;
  margin: auto;
  margin-top: ${(props) =>
    props.yesNoDialog
      ? props.open
        ? "15vw"
        : "5vw"
      : props.open
      ? "150px"
      : "-50px"};
  margin-bottom: 20px;
  z-index: 101;
  transition: margin 200ms ease-in-out;
  border-radius: 40px;
`;

const Modal = (props) => {
  const { theme } = useContext(ThemeContext);
  const { open, toggle, yesNoDialog } = props;
  const onWrapperClick = (e) => {
    e.stopPropagation();
    toggle();
  };
  return (
    <StyledWrapper theme={theme} open={open} data-testid="modal-wrapper">
      <CloseWrapper
        data-testid="close-wrapper"
        open={open}
        onClick={onWrapperClick}
      />
      <StyledContentWrapper theme={theme} open={open} yesNoDialog={yesNoDialog}>
        {props.children}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default Modal;
