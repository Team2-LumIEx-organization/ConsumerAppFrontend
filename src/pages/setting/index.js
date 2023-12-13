import React, { useContext, useEffect } from "react";
import { AuthorizedBackground } from "../../components/base/common";
import Button from "../../components/base/button";
import MainContext from "../../MainContext";
import axios from "axios";
import { ThemeContext } from "../../context/themeContext";

const SettingPage = () => {
  const { deleteAccountContext, setTokenContext } =
    useContext(MainContext).login;
  const { toggleTheme } = useContext(ThemeContext);
  const { setPageContext } = useContext(MainContext).trucks;

  useEffect(() => {
    setPageContext("setting");
  }, []);

  const onDeleteAccountClick = () => {
    deleteAccountContext();
    setTokenContext("");
    localStorage.removeItem("token");
    axios.defaults.headers.common.token = "";
  };

  return (
    <AuthorizedBackground>
      <div
        style={{
          height: "400px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button
          onClick={onDeleteAccountClick}
          text="Delete my account"
          type="primary"
        />
        <div style={{ height: "80px" }}></div>
        <Button
          onClick={() => toggleTheme()}
          text="Toggle Theme"
          type="primary"
        />
      </div>
    </AuthorizedBackground>
  );
};

export default SettingPage;
