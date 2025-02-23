import React from "react";
import {
  ButtonLink,
  Container,
  RedBackgroundHeading,
} from "../components/reusables/Styles";
import styled from "styled-components";
import { DaysOfOperationComponent } from "../components/reusables/Components";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useSelector } from "react-redux";

const About = () => {
  const { currentStoreLocation } = useGlobalContext();
  const { pageContent } = useSelector((state) => state.aboutPage);
  return (
    <AboutContainer>
      {currentStoreLocation && (
        <>
          <RedBackgroundHeading>Hours of operation</RedBackgroundHeading>
          <DaysOfOperationComponent />
        </>
      )}
      <RedBackgroundHeading>About Mimidas Tire & Auto</RedBackgroundHeading>
      <Container style={{ padding: "2rem 0" }}>
        {pageContent &&
          pageContent.contents &&
          pageContent.contents.map((content) => {
            if (content.contentType === "para")
              return <Para>{content.content}</Para>;
            if (content.contentType === "heading")
              return <Heading>{content.content}</Heading>;
          })}
        {/* <Para>
          Welcome to Mimidas Tire & Auto, your premier choice for comprehensive
          auto services and tire solutions in Michigan. Our goal is to ensure
          your utmost satisfaction by providing unparalleled value for your
          investment. We pride ourselves on offering top-notch service,
          utilizing quality parts and products, all at affordable prices.
        </Para>
        <Para>
          Our team of highly-trained technicians is here to address all your
          inquiries and offer tailored solutions for your vehicle's needs. We
          are committed to establishing a long-lasting relationship with you,
          built on trust and exceptional service. Should you require any
          assistance or have any concerns, please do not hesitate to reach out
          to us.
          <br />
          <br />
          Thank you for choosing Mimidas Tire & Auto, where your automotive needs
          are our priority.
        </Para>
        <Heading>RELIABLE SERVICES YOU CAN COUNT ON</Heading>
        <Para>
          When it comes to reliable and convenient auto service or tire service,
          look no further than Mimidas Tire & Auto. Our dedicated team of expert
          technicians is committed to providing efficient solutions, ensuring
          that you can get back on the road swiftly. With our prompt service,
          you can trust us to take care of all your automotive and tire needs.
          Visit us today and experience the difference at Mimidas Tire & Auto!
        </Para>
        <Heading>EXPERT AUTO REPAIR SERVICES</Heading>
        <Para>
          As the premier auto repair shops serving Michigan, Mimidas Tire & Auto
          is dedicated to providing top-notch automotive repair and mechanic
          services. Our highly qualified mechanics possess the expertise to
          handle a wide range of automotive repairs, utilizing state-of-the-art
          equipment for optimal results. Whether you own a passenger car,
          medium-sized truck, mini-van, or SUV, our mechanics strive to ensure
          that your vehicle performs at its best before leaving our service
          bays.
        </Para>
        <Para>
          At our auto repair shop, we cater to various makes and models,
          demonstrating our commitment to meeting the unique needs of our
          customers. Our mechanics consistently uphold superior standards,
          always keeping your best interests in mind. If you're seeking a
          one-stop automotive repair shop, look no further than Mimidas Tire &
          Auto. Our experienced mechanics are ready to provide you with a
          reliable estimate for any automotive repair issue you may be facing
        </Para>
        <Para>
          Customer satisfaction is our top priority. We have earned a
          longstanding reputation for delivering quality repairs, whether you
          require routine auto maintenance services or essential car repairs.
          Feel free to contact us online or visit our shop during business hours
          to experience our exceptional service firsthand.
        </Para> */}
        {/* <Heading>
          Mimidas Tire & Auto: Nurturing Growth and Providing Opportunity
        </Heading>
        <Para>
          Mimidas Tire & Auto draws its inspiration from the remarkable journey of
          the mighty oak tree. Just like the oak tree begins as a small Mimidas,
          we believe that every vehicle and every customer has the potential for
          growth and prosperity. Our goal is to cultivate that potential by
          offering exceptional service and creating a positive impact within our
          community.
        </Para>
        <Para>
          Similar to the Mimidas's transformation into a sturdy oak tree with
          sprawling branches, Mimidas Tire & Auto strives to provide a strong
          foundation for your automotive needs. We aim to be the solid ground
          upon which your vehicle can thrive, just as the oak tree becomes a
          symbol of strength and reliability. Our team of dedicated
          professionals works tirelessly to ensure that our services contribute
          to the well-being and longevity of your vehicle.
        </Para> */}
        <Actions>
          <ButtonLink to={"/services"}>Browse Service Catalog</ButtonLink>
          <ButtonLink to={"/tires"}>Explore Tire Catalog</ButtonLink>
        </Actions>
      </Container>
    </AboutContainer>
  );
};

const AboutContainer = styled.section``;

const Para = styled.p`
  font-family: var(--mont);
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Heading = styled.h3`
  font-family: var(--mont);
  font-weight: 700;
  font-size: 1.3rem;
  margin: 1.5rem 0 1rem;
  text-transform: uppercase;
`;

const Actions = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 800px;
  margin: auto;
  justify-content: center;

  @media (max-width: 540px) {
    flex-direction: column;
  }

  a {
    flex: 1;
    align-self: stretch;
    max-width: initial;
  }
`;

export default About;
