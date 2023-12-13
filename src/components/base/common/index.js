import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const VerticalSpace = styled.div`
  height: ${(propes) => propes.height + "px"};
`;

export const HorizentalSpace = styled.div`
  width: ${(propes) => propes.width + "px"};
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: auto;
`;

const AuthorizedWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-top: 80px;
  overflow-x: hidden;
`;

export function Background(props) {
  const { theme, toggleTheme, darkThemeSelected } = useContext(ThemeContext);

  return <Wrapper theme={theme}>{props.children}</Wrapper>;
}

export function AuthorizedBackground(props) {
  const { theme, toggleTheme, darkThemeSelected } = useContext(ThemeContext);

  return <AuthorizedWrapper theme={theme}>{props.children}</AuthorizedWrapper>;
}
