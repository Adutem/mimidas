import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { NormalPara, SectionPara } from "./reusables/Styles";
import hoursOfOperation, {
  fullHoursOfOperation,
} from "../data/hours-of-operation";
import { useGlobalContext } from "../contexts/GlobalContext";
import { SearchComponent } from "./Advert";
import { LocationModal } from "../pages/ScheduleService";

const LocationComp = () => {
  const { currentStoreLocation, displayLocationModal } = useGlobalContext();

  const hideLocationComponent = () => {
    document.querySelector("#location-comp")?.classList.remove("show");
    document.body.style.overflow = "initial";
  };

  useEffect(() => {
    if (document.querySelector("#location-comp")?.classList.contains("show")) {
      console.log("True");
      document.body.style.overflow = "hidden";
    }
  }, [currentStoreLocation]);

  return (
    <LocationCompContainer id="location-comp">
      <Underlay onClick={hideLocationComponent} className="underlay" />
      <LocationCompContContainer>
        <SearchComponent
          showShowModal={displayLocationModal}
          currentLocation={currentStoreLocation}
          style={{ marginTop: "1.5rem" }}
          linkType={"mapLink"}
          linkText={"Get Direction"}
        />
        {currentStoreLocation && (
          <>
            {/* <NormalPara
              style={{ fontSize: "0.9rem", margin: 0, fontWeight: "bold" }}
            >
              Mimidas Tire & Auto
            </NormalPara>
            <AddressComp>591 S Lapeer Road, Lake Orion, MI 48362</AddressComp>
            <TelLink href="tel:+248-693-7979">248-693-7979</TelLink>
            <TelLink
              href="https://www.google.com/maps/place/591+S+Lapeer+Rd,+Lake+Orion,+MI+48362/@42.775254,-83.238598,14z/data=!4m6!3m5!1s0x8824ecda1562952f:0x3f2fb58be35f7fe4!8m2!3d42.7752542!4d-83.2385977!16s%2Fg%2F11b8vch87h?hl=en&entry=ttu"
              target="_blank"
            >
              Direction
            </TelLink> */}
            <Seperator />

            <SectionPara>Store Hours</SectionPara>
            <ContainerDiv>
              {fullHoursOfOperation.map((hop) => (
                <NormalPara
                  style={{
                    margin: "0.5rem 0",
                    fontSize: "0.75rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    //   justifyContent: "space-between",
                  }}
                >
                  <strong>{hop.date}</strong>
                  {hop.hours.join(" - ")}
                </NormalPara>
              ))}
            </ContainerDiv>
          </>
        )}
      </LocationCompContContainer>
    </LocationCompContainer>
  );
};

const LocationCompContContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: var(--white);
  position: relative;
  z-index: 4;
  padding: 1rem;
  overflow: auto;
  padding-bottom: 6rem;
`;

const LocationCompContainer = styled.div`
  border-top: 1px solid var(--gray);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;

  &.show {
    display: flex;
  }
`;

const AddressComp = styled.address`
  font-family: var(--mont);
  font-size: 0.75rem;
`;

const TelLink = styled.a`
  color: var(--black);
  font-family: var(--mont);
  font-size: 0.75rem;
  text-decoration: underline;
  color: var(--primary-color);
  font-weight: bold;

  i {
    display: flex;
    align-items: center;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(var(--gray-rgb), 0.2);
  margin: 1rem auto;
`;

const ContainerDiv = styled.div`
  //   margin: 1rem 0 1.5rem;
`;

const Underlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: -1;
  cursor: pointer;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export default LocationComp;
