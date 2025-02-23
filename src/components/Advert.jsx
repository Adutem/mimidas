import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import rightBackground from "../assets/tire-2.jpg";
import newRightBackground from "../assets/image-3.jpg";
import newLeftBackground from "../assets/image-5.jpg";
import leftBackground from "../assets/tire-3.jpg";
import {
  Button,
  ButtonLink,
  RelativeGradientContainer,
  FormButton,
  NormalPara,
} from "./reusables/Styles";
import { LocationModal } from "../pages/ScheduleService";
import serviceLocations from "../data/service-location-data";
import { useGlobalContext } from "../contexts/GlobalContext";

const Advert = () => {
  const { currentStoreLocation, displayLocationModal } = useGlobalContext();
  const portalRef = useRef(null);

  return (
    <AdvertContainer>
      <AdvertContentContainer>
        <LeftContainer>
          <Heading>Browse Our Tires</Heading>
          <SearchComponent
            showShowModal={displayLocationModal}
            currentLocation={currentStoreLocation}
            linkType={"link"}
          />
        </LeftContainer>
        <RightContainer>
          <Div>
            <Heading>Services You Can Trust</Heading>
            <ParaText>
              When you need convenient auto service or tire service from a shop
              you can trust, it’s time to visit your friends at Mimidas Tire &
              Auto. Our expert technicians work hard, so you can be in and out
              of our shop in a jiffy. See us for your automotive and tire needs
              today!
            </ParaText>
          </Div>
          <ButtonLink to={"/services"}>View Repair</ButtonLink>
        </RightContainer>
      </AdvertContentContainer>
    </AdvertContainer>
  );
};

const AdvertContainer = styled.div``;

const AdvertContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: min(500px, 80vw);
  grid-auto-rows: min(500px, 80vw);
  gap: 0.8rem;
  padding: 0 0.8rem;
  font-family: var(--teko);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 500px;
    grid-auto-rows: 500px;
  }
`;

const Container = styled(RelativeGradientContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 1rem;
`;

const LeftContainer = styled(Container)`
  justify-content: space-around;
  background: url(${newLeftBackground});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
`;
const RightContainer = styled(Container)`
  justify-content: space-around;
  background: url(${newRightBackground});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  color: var(--gray);
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: var(--white);
`;

const ParaText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 300px;
  margin-top: 2rem;
  color: var(--white);
`;

const Div = styled.div``;

const ContainerX = styled.div`
  // flex: 1;
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

const OptimizedFormLink = styled(FormButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    display: flex;

    @media (max-width: 270px) {
      display: none;
    }
  }
`;

const OptimizedFormButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    display: flex;
  }
`;

const fullColumn = { gridColumn: "1 / -1" };
export default Advert;

export function SearchComponent({
  showShowModal,
  currentLocation,
  hideBrowseLink,
  dropdownText,
  linkText,
  linkType,
  ...rest
}) {
  return (
    <ContainerX
      style={{
        background: "rgba(var(--white-rgb), 0.4)",
        backdropFilter: "blur(4px)",
        ...rest?.style,
      }}
      // {...rest}
    >
      <OptimizedFormButton
        style={{ ...fullColumn, background: "#f1f1f1", color: "#000" }}
        onClick={showShowModal}
      >
        {dropdownText || "select store location"}
        <i className="fi fi-sr-caret-down"></i>
      </OptimizedFormButton>
      <div style={{ background: "transparent", padding: "1rem" }}>
        {currentLocation ? (
          <>
            <NormalPara
              style={{
                margin: 0,
                fontSize: "1rem",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {currentLocation.shopLocation}
            </NormalPara>
            <NormalPara style={{ fontSize: "0.85rem", margin: "0.4rem 0" }}>
              Phone Number:{" "}
              <a href={`tel:+1 ${currentLocation.phoneNumber}`}>
                {/* <a
                href={`tel:+1 ${currentLocation.phoneNumber.replace(/\-/g, "")}`}
              > */}
                {currentLocation.phoneNumber}
              </a>
            </NormalPara>
            <NormalPara style={{ fontSize: "0.75rem", margin: 0 }}>
              Email:{" "}
              <a href={`mailto:${currentLocation.email}`}>
                {currentLocation.email}
              </a>
            </NormalPara>
          </>
        ) : (
          <>
            <NormalPara
              style={{ color: "red", display: "flex", alignItems: "center" }}
            >
              Pick a store{" "}
              <i
                className="fi fi-sr-arrow-small-up"
                style={{
                  display: "flex",
                  marginLeft: "0.5rem",
                  fontSize: "2rem",
                }}
              ></i>
            </NormalPara>
          </>
        )}
      </div>
      {hideBrowseLink || (
        <OptimizedFormLink
          to={
            currentLocation && currentLocation[linkType]
              ? currentLocation[linkType]
              : "#"
          }
          target={
            currentLocation && currentLocation[linkType] ? "_blank" : "_self"
          }
        >
          {linkText || "Continue"}
          <i className="fi fi-sr-arrow-up-right-from-square"></i>
        </OptimizedFormLink>
      )}
    </ContainerX>
  );
}
