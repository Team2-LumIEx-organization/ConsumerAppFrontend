import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { AuthorizedBackground } from "../../components/base/common";
import { StyledCard, StyledCardItem } from "../../components/base/card";
import Input from "../../components/base/input";
import DropDown from "../../components/base/drop-down";
import { HorizentalSpace, VerticalSpace } from "../../components/base/common";
import Button from "../../components/base/button";
import styled from "styled-components";
import MainContext from "../../MainContext";
import { useNavigate } from "react-router-dom";
import CabinentModal from "../cabinents";

const Title = styled.div`
  position: Relative;
  color: ${(props) => props.theme.textPrimary};
  font-size: 24px;
  margin-bottom: 72px;
  width: 100%;
  text-align: center;
`;

const locations = [
  { name: "Location 1", id: 1 },
  { name: "Location 2", id: 2 },
  { name: "Location 3", id: 3 },
  { name: "Location 4", id: 4 },
  { name: "Location 5", id: 5 },
];
const FormCard = () => {
  const { updateToasterContext } = useContext(MainContext).toasters;
  const {
    createParcelContext,
    locations: locationsData,
    getLocationsContext,
  } = useContext(MainContext).dashboard;
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [reciver, setReciver] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [mass, setMass] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reciverLocation, setReciverLocation] = useState(0);
  const [reciverCabinent, setReciverCabinent] = useState(0);
  const [senderLocation, setSenderLocation] = useState(0);
  const [senderCabinent, setSenderCabinent] = useState(0);
  const [seLectedLocation, setSeLectedLocation] = useState({});

  useEffect(() => {
    getLocationsContext();
  }, []);
  useEffect(() => {
    if (reciverLocation) {
      setReciverCabinent(0);
      setSeLectedLocation({ type: "reciver", location: reciverLocation });
    }
  }, [reciverLocation]);

  useEffect(() => {
    if (senderLocation) {
      setSenderCabinent(0);
      setSeLectedLocation({ type: "sender", location: senderLocation });
    }
  }, [senderLocation]);

  const toggleCabinentModal = () => {
    setSeLectedLocation({});
  };
  const onCabinentClick = (id) => {
    if (seLectedLocation.type === "reciver") {
      setReciverCabinent(id);
    }
    if (seLectedLocation.type === "sender") {
      setSenderCabinent(id);
    }
    setSeLectedLocation({});
  };
  const onChange = (key, value) => {
    if (key === "reciver") {
      setReciver(value);
    }
    if (key === "x") {
      setX(value);
    }
    if (key === "y") {
      setY(value);
    }
    if (key === "z") {
      setZ(value);
    }
    if (key === "mass") {
      setMass(value);
    }
    if (key === "name") {
      setName(value);
    }
    if (key === "address") {
      setAddress(value);
    }
    if (key === "phoneNumber") {
      setPhoneNumber(value);
    }
    if (key === "reciverLocation") {
      setReciverLocation(value);
    }
    if (key === "senderLocation") {
      setSenderLocation(value);
    }
  };
  const onClick = async () => {
    const result = await createParcelContext({
      reciver,
      x,
      y,
      z,
      mass,
      name,
      address,
      phone_number: phoneNumber,
      reciver_location: reciverLocation,
      reciver_cabinent: reciverCabinent,
      sender_location: senderLocation,
      sender_cabinent: senderCabinent,
    });
    if (result && result.status === 400) {
      updateToasterContext({
        type: "error",
        message: result.message,
      });
    } else {
      updateToasterContext({
        type: "success",
        message: "Parcel created",
      });
      console.log("result", result);
      navigate("/dashboard");
    }
  };
  return (
    <AuthorizedBackground>
      <StyledCard style={{ flexBasis: "33.333333%" }} createParcel={true}>
        <Title theme={theme}>Enter Your Parcel Info</Title>
        <></>
        <StyledCardItem>
          <Input
            placeholder="Receiver"
            onChange={onChange}
            inputTarget="reciver"
            value={reciver}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <Input
            placeholder="Mass"
            onChange={onChange}
            inputTarget="mass"
            value={mass}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <Input
            placeholder="Name"
            onChange={onChange}
            inputTarget="name"
            value={name}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <Input
            placeholder="X"
            onChange={onChange}
            inputTarget="x"
            value={x}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <Input
            placeholder="Y"
            onChange={onChange}
            inputTarget="y"
            value={y}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <Input
            placeholder="Z"
            onChange={onChange}
            inputTarget="z"
            value={z}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <Input
            placeholder="Address"
            onChange={onChange}
            inputTarget="address"
            value={address}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <Input
            placeholder="Phone Number"
            onChange={onChange}
            inputTarget="phoneNumber"
            value={phoneNumber}
            validate={true}
          />
        </StyledCardItem>
        <StyledCardItem>
          <DropDown
            options={locations}
            selected={reciverLocation}
            setSelected={setReciverLocation}
            label="Receiver Location"
          />
        </StyledCardItem>
        <StyledCardItem>
          <DropDown
            options={locations}
            selected={senderLocation}
            setSelected={setSenderLocation}
            label="Sender Location"
          />
        </StyledCardItem>
      </StyledCard>
      <VerticalSpace height={50} />
      <div style={{ width: "fit-content", margin: "auto" }}>
        <Button text={"Create Parcel"} onClick={onClick} />
      </div>
      <CabinentModal
        onCabinentClick={onCabinentClick}
        seLectedLocation={seLectedLocation}
        open={!!seLectedLocation.location}
        toggle={toggleCabinentModal}
        locations={locationsData}
      />
    </AuthorizedBackground>
  );
};

export default FormCard;
