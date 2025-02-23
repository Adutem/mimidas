import React from "react";
import styled from "styled-components";
import {
  ButtonLink,
  Container,
  RelativeGradientContainer,
  SectionHeading,
  SectionPara,
} from "./reusables/Styles";
import { Link } from "react-router-dom";
import repairBackground from "../assets/image-3.jpg";
import couponImage from "../assets/coupon.png";

const GetYourTire = () => {
  return (
    <SectionContainer>
      <Container>
        <LayoutContainter>
          <Div>
            <i className="fi fi-rr-tire"></i>
          </Div>
          <SectionHeading>
            Get your <span className="colored">Tire Anytime</span>
          </SectionHeading>
          <SectionPara>
            Need tires? Our shop has some of the best in town! We carry a wide
            variety of brands from a large{" "}
            <Link to={"/tires"} className="colored underline">
              assortment of tires
            </Link>{" "}
            Come in and see us today.
          </SectionPara>
          <ButtonLink to="/tires">Order Online</ButtonLink>
        </LayoutContainter>
      </Container>
    </SectionContainer>
  );
};

const SectionContainer = styled.section``;
const LayoutContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  gap: 1.2rem;
`;

const Div = styled.div`
  i {
    font-size: min(11rem, 15vw);
    max-height: 165px;
    display: flex;

    @media (max-width: 480px) {
      font-size: 8rem;
    }
  }
`;

const QuoteSectionContainer = styled(RelativeGradientContainer)`
  background: url(${repairBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  &::before {
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 1)
    );
  }

  h2,
  p {
    color: var(--white);
  }
`;

const GetAQuote = () => {
  return (
    <QuoteSectionContainer>
      <Container>
        <LayoutContainter>
          <SectionHeading>Get a quote fast</SectionHeading>
          <SectionPara>
            No one wants a surprise when it comes time to pay for service, so
            request a quote from us today for no surprises tomorrow!
          </SectionPara>
          <ButtonLink to="/services">I need auto repairs</ButtonLink>
        </LayoutContainter>
      </Container>
    </QuoteSectionContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const CouponImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const AdditionalOffer = () => {
  return (
    <SectionContainer style={{ background: "#f1f1f1" }}>
      <Container>
        <LayoutContainter>
          <SectionHeading>
            Save money <span className="colored">Today</span>
          </SectionHeading>
          <SectionPara>
            Mimidas Tires & Auto has the best deal around so that you can be sure
            that you're getting your money's worth! <br /> Visit us today for
            quality service for a price you can afford
          </SectionPara>
          <ImageContainer>
            <Link to={"/coupons"} style={{ display: "block", width: "100%" }}>
              <CouponImage src={couponImage} />
            </Link>
          </ImageContainer>
        </LayoutContainter>
      </Container>
    </SectionContainer>
  );
};

export default GetYourTire;

export { GetAQuote, AdditionalOffer };
