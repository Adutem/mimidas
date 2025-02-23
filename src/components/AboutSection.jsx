import React from "react";
import styled from "styled-components";
import welcomeImage from "../assets/welcome.png";
import { Container, SectionHeading, SectionPara } from "./reusables/Styles";

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <Container>
        <LayoutContainter>
          <ImageContainer>
            <WelcomeImage src={welcomeImage} />
          </ImageContainer>
          <SectionHeading>Mimidas Tire & Auto</SectionHeading>
          <SectionPara>
            Welcome to Mimidas Tire & Auto, your premier choice for comprehensive
            auto services and tire solutions in Michigan. Our goal is to ensure
            your utmost satisfaction by providing unparalleled value for your
            investment. We pride ourselves on offering top-notch service,
            utilizing quality parts and products, all at affordable prices
          </SectionPara>
          <SectionPara className="hide-small">
            Our team of highly-trained technicians is here to address all your
            inquiries and offer tailored solutions for your vehicle's needs. We
            are committed to establishing a long-lasting relationship with you,
            built on trust and exceptional service. Should you require any
            assistance or have any concerns, please do not hesitate to reach out
            to us.
          </SectionPara>
        </LayoutContainter>
      </Container>
    </AboutSectionContainer>
  );
};

const AboutSectionContainer = styled.section``;

const LayoutContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  gap: 1.5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

const WelcomeImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export default AboutSection;
