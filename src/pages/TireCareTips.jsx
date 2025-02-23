import React from "react";
import styled from "styled-components";
import {
  RedBackgroundHeading,
  NormalPara,
  Container,
  List,
  ListItem,
  OptimizedButtonLink,
} from "../components/reusables/Styles";

const TireCareTips = () => {
  return (
    <TireCarePageContainer>
      <RedBackgroundHeading>Tire Care Tips</RedBackgroundHeading>
      <Container style={{ margin: "2rem auto 3rem" }}>
        <NormalPara>
          Your tires are the only part of your vehicle that connects it with the
          road and are responsible for safety, comfort, mobility, and fuel
          economy. Proper tire care and maintenance are, therefore, very
          necessary to ensure your tires stay effective. This care and
          maintenance can be easily done by your personal attention and with the
          help of our professional experts at Mimidas Tire & Auto. Take care of
          your tires, and they’ll reward you with better gas mileage and
          improved handling and performance. Your tires are all that stand
          between the road and your car, which is why it’s important to stay up
          to date on their maintenance. At Mimidas Tire & Auto, we want our
          customers to remain on top of tire performance and adhere to
          maintenance schedules outlined in their owner’s manual.
        </NormalPara>
        <NormalPara>
          To get the most out of your tires and keep your tires in working
          order, these essential tire care tips will help:
        </NormalPara>
        <RedBackgroundHeading>The Pressure</RedBackgroundHeading>
        <NormalPara>
          The pressure of your tires can influence the way you drive.
          Under-inflated tires can cause irregular tire wear and can cause a
          tire blow out, and over-inflated tires are more likely to be damaged
          when hitting an obstacle. Keep your tire pressure at the recommended
          PSI that is outlined in the owner’s manual. Properly inflated tires
          will maximize tread life, improve handling, and increase fuel
          efficiency and overall driver safety.
        </NormalPara>
        <RedBackgroundHeading>Tire Tread Depth</RedBackgroundHeading>
        <NormalPara>
          A tire’s tread is what gives it traction on the road. Your tire has
          built-in tread wear indicators, also known as “wear bars.” When these
          bars are flush with your tire’s tread, then it’s time to get the tire
          replaced. If tires are bald and without much tread, you’re more likely
          to lose your connection with the road while driving.
        </NormalPara>
        <RedBackgroundHeading>Tire Rotation</RedBackgroundHeading>
        <NormalPara>
          When you drive your vehicle, it will wear down certain tires more than
          others, so you should have your tires rotated every 5,000-8,000 miles.
          Recommended rotation patterns for your vehicle can be found in your
          owner’s manual. Rotating the position of your tires will help you get
          the most miles out of your tires, the best traction, and improved
          driving safety.
        </NormalPara>
        <RedBackgroundHeading>Tire Balancing</RedBackgroundHeading>
        <NormalPara>
          Tire balancing is done by evenly distributing the weight of your
          vehicle, so it is fully balanced evenly across all the tires. Whenever
          you have your tires replaced, tire balancing should also be done as a
          part of the tire installation process. Balanced tires give you a
          smoother, more comfortable ride without feeling any vibrations coming
          from the wheels.
        </NormalPara>
        <RedBackgroundHeading>Wheel Alignment</RedBackgroundHeading>
        <NormalPara>
          A wheel alignment involves fine-tuning the angles of your vehicle’s
          suspension system so that your wheels are pointed in the right
          direction. A wheel alignment is performed to bring the car's
          suspension into its proper configuration, positioning, and adjusting
          components so that wheels are aligned with each other and the road
          surface. Proper alignment will give you a smoother ride, fewer
          vibration, reduced wear on your tires, and better mileage.
        </NormalPara>
        <RedBackgroundHeading>
          Mimidas Tire & Auto Offers Quality Tire Services and Tire Maintenance
        </RedBackgroundHeading>
        <NormalPara>
          Take these tips and suggestions into account while maintaining your
          tires. Inspect your tires regularly for uneven tire wear and correct
          tire pressure. By properly maintaining your tires and vehicle, you
          will keep yourself and passengers very safe, increase the life of your
          tires, and have a positive impact on the environment. Proper
          maintenance of tires is important for optimal vehicle performance.
          Maintaining your tires by checking tire pressure, rotating your tires,
          replacing your tires when needed, and ensuring that your tires are
          well-balanced are essential for your vehicle’s performance and
          reliability. At Mimidas Tire & Auto , we are here for all your tire
          services and repairs. Schedule an appointment today and let us care
          for your tires!
        </NormalPara>
        <OptimizedButtonLink to={"/find-us/contact"}>
          <i className="fi fi-sr-envelope"></i>
          Contact Us About Car Care Tips
        </OptimizedButtonLink>
      </Container>
    </TireCarePageContainer>
  );
};

const TireCarePageContainer = styled.div``;

export default TireCareTips;
