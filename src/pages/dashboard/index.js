import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../MainContext";
import { AuthorizedBackground } from "../../components/base/common";
import Tabs from "../../components/base/Tabs";
import SentCard from "../../components/sent-card";
import ReceivedCard from "../../components/recieved-card";
import CardModal from "../../components/card-modal";

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [cardModal, setCardModal] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState({});
  const {
    sentParcels,
    recivedParcels,
    getSentParcelsContext,
    getRecivedParcelsContext,
  } = useContext(MainContext).dashboard;
  const { setPageContext } = useContext(MainContext).trucks;

  useEffect(() => {
    if (selectedTab === 0) {
      setPageContext("dashboard");
    } else {
      setPageContext("dashboard2");
    }
  }, [selectedTab]);

  useEffect(() => {
    getSentParcelsContext();
    getRecivedParcelsContext();
  }, []);

  const onParcelClick = (item) => {
    setSelectedParcel(item);
    toggleCardModal();
  };

  const toggleCardModal = () => {
    setCardModal(!cardModal);
  };

  return (
    <AuthorizedBackground>
      <Tabs
        selectedTab={selectedTab}
        onTabClick={setSelectedTab}
        tabs={[
          {
            name: "Sent",
            id: 0,
          },
          {
            name: "Recieved",
            id: 1,
          },
        ]}
      />
      <SentCard
        item={{
          name: "Parcel Name",
          delivery_status: "Delivery Status",
          reciver: { email: "email" },
        }}
        title={true}
      />
      {selectedTab === 0 &&
        sentParcels &&
        sentParcels.map((item) => {
          return <SentCard onClick={() => onParcelClick(item)} item={item} />;
        })}
      {selectedTab === 1 &&
        recivedParcels &&
        recivedParcels.map((item) => {
          return (
            <ReceivedCard onClick={() => onParcelClick(item)} item={item} />
          );
        })}
      <CardModal
        open={cardModal}
        toggle={toggleCardModal}
        selectedParcel={selectedParcel}
        selectedTab={selectedTab}
      />
    </AuthorizedBackground>
  );
};

export default DashboardPage;
