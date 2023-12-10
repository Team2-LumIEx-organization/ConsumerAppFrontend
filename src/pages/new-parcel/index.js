import React, { useContext, useEffect } from "react";
import CreateParcelCard from "../../components/create-parcel-card";
import MainContext from "../../MainContext";

const DashboardPage = () => {
  const { setPageContext } = useContext(MainContext).trucks;

  useEffect(() => {
    setPageContext("newParcel");
  }, []);

  return <CreateParcelCard />;
};

export default DashboardPage;
