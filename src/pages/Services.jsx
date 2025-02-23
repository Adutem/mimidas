import React, { useState } from "react";
import styled from "styled-components";
import {
  RowFlex,
  SectionHeading,
  Container,
  SectionPara,
  NormalPara,
  GridLayoutContainer,
} from "../components/reusables/Styles";
import { FormGroupComponent } from "../components/reusables/Components";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import servicePageIcon from "../assets/service-page-icon.png";
import serviceData from "../data/services-with-image";

const Services = () => {
  const { services, parseName } = useGlobalContext();
  const [serviceName, setServiceName] = useState("");
  const navigate = useNavigate();

  const handleServiceSelect = (e) => {
    setServiceName(e.target.value);
    const filterId = parseName(e.target.value);
    navigate(`/services/${filterId}`);
  };

  return (
    <ServicePageContainer>
      <IconDivContainer>
        <IconImage src={servicePageIcon} />
      </IconDivContainer>
      <Container>
        <OptimizedRowFlex
          jus={"space-between"}
          align="center"
          style={{ gap: "2rem", padding: "1.5rem 0" }}
        >
          <SectionPara>Auto Repairs</SectionPara>{" "}
          <FormGroupComponent
            type={"select"}
            name={"serviceName"}
            onChange={handleServiceSelect}
            value={serviceName}
            options={services}
            label={"Select a Service: "}
            style={{
              flexDirection: "row",
              marginBottom: "0",
              alignItems: "center",
            }}
            labelStyle={{ minWidth: "max-content" }}
          />
        </OptimizedRowFlex>
        {/* <NormalPara>
          We are one of the leading auto repair shops serving customers in, 591
          S Lapeer Road, Lake Orion, MI and surrounding areas. All automotive
          repair and mechanic services at Mimidas Tire & Auto are performed by
          highly qualified mechanics. Our mechanic shop works on numerous
          vehicles with the use of quality truck and car repair equipment.
          Whether you drive a passenger car, medium sized truck, mini-van, or
          SUV, our mechanics strive to ensure that your vehicle will be
          performing at its best before leaving one of our service bays. Our
          auto repair shop is capable of servicing a variety of makes and
          models. Our superior standards show that our mechanics always have the
          best interests of our customers in mind. Looking for a one-stop
          automotive repair shop? Look no further than us, and allow our
          mechanics to give you a reliable estimate of any automotive repair
          issue you might be facing.
        </NormalPara>
        <NormalPara>
          Our number one goal has always been complete satisfaction for
          customers in, 591 S Lapeer Road, Lake Orion, MI, and surrounding
          areas. Our car repair shop has a longstanding reputation for quality
          repairs. Whether you need routine auto maintenance services or
          necessary car repairs, contact us online or visit us during business
          hours.
        </NormalPara> */}
        <SectionHeading style={{ marginTop: "1.5rem" }}>
          Services
        </SectionHeading>
        <GridLayoutContainer
          style={{
            gap: "2rem",
            margin: "3rem auto",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {serviceData.map((service) => (
            <ServiceCard {...service} />
          ))}
        </GridLayoutContainer>
      </Container>
    </ServicePageContainer>
  );
};

const ServicePageContainer = styled.div``;

const IconDivContainer = styled.div`
  width: 100%;
  height: 400px;
  // overflow: hidden;
  background: #1a1a1a;
  display: flex;
  justify-content: center;
`;

const IconImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;

  @media (max-width: 600px) {
    width: 100%;
    object-fit: cover;
  }
`;

const OptimizedRowFlex = styled(RowFlex)`
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem !important;
  }

  & > div {
    @media (max-width: 700px) {
      flex-wrap: wrap;
    }
  }
`;

export default Services;
