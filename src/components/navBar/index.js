import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import { jwtDecode } from "jwt-decode";

import { ThemeContext } from "../../context/themeContext";
import MainContext from "../../MainContext";

import axios from "axios";

import Button from "../base/button";
import Tab from "../base/tab";
import NotificationModal from "../notification-modal";

import Logo from "../../asset/logo.svg";
import Bell from "../../asset/bell.svg";

const NavWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  top: 0;
  left: 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.textPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

const SideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 120px;
  margin-right: 60px;
  filter: ${(props) =>
    props.darkThemeSelected
      ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(103%) contrast(101%)"
      : "invert(76%) sepia(3%) saturate(22%) hue-rotate(321deg) brightness(81%) contrast(81%)"};
`;

const StyledBell = styled.img`
  width: 20px;
  filter: ${(props) =>
    props.notification
      ? "invert(21%) sepia(83%) saturate(1884%) hue-rotate(347deg) brightness(103%) contrast(87%)"
      : props.darkThemeSelected
      ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(103%) contrast(101%)"
      : "invert(76%) sepia(3%) saturate(22%) hue-rotate(321deg) brightness(81%) contrast(81%)"};
`;

function Navbar() {
  const { darkThemeSelected, theme } = useContext(ThemeContext);
  const { setTokenContext } = useContext(MainContext).login;
  const { notifications, getNotificationsContext, removeNotificationsContext } =
    useContext(MainContext).navbar;
  const [selectedTab, setSelectedTab] = useState(0);
  const [openNotificationModal, setOpenNotificationModal] = useState(false);

  const toggleNotificationModal = () => {
    if (openNotificationModal) {
      if (notifications.length) {
        removeNotificationsContext();
      }
      setOpenNotificationModal(false);
    } else {
      setOpenNotificationModal(true);
    }
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    getNotificationsContext();
  }, []);

  let user = {};
  if (token) {
    user = jwtDecode(token);
  }

  const onLogoutClick = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common.token = "";
    setTokenContext("");
  };
  useEffect(() => {
    const currentSubUrl = window.location.pathname;
    if (currentSubUrl.startsWith("/dashboard")) {
      setSelectedTab(1);
    }
    if (currentSubUrl.startsWith("/send-parcel")) {
      setSelectedTab(2);
    }
    if (currentSubUrl.startsWith("/setting")) {
      setSelectedTab(3);
    }
  }, [window.location.pathname]);

  return (
    <NavWrapper theme={theme}>
      <SideWrapper>
        <StyledLogo darkThemeSelected={darkThemeSelected} src={Logo} />
        <Tab
          id={1}
          selectedTab={selectedTab === 1}
          link="/dashboard"
          name="Dashboard"
        />
        <Tab
          id={2}
          selectedTab={selectedTab === 2}
          link="/send-parcel"
          name="New Parcel"
        />
        <Tab
          id={3}
          selectedTab={selectedTab === 3}
          link="/setting"
          name="Setting"
        />
      </SideWrapper>
      <SideWrapper>
        <StyledBell
          onClick={toggleNotificationModal}
          notification={notifications.length !== 0}
          darkThemeSelected={darkThemeSelected}
          src={Bell}
        />
        <div style={{ width: "20px" }}></div>
        {user.email}
        <div style={{ width: "20px" }}></div>
        <Button
          onClick={onLogoutClick}
          text="Log out"
          size="small"
          type="secondary"
        />
      </SideWrapper>
      <NotificationModal
        open={openNotificationModal}
        toggle={toggleNotificationModal}
        notifications={notifications}
      />
    </NavWrapper>
  );
}

export default Navbar;
