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

const CarCareTips = () => {
  return (
    <CarCarePageContainer>
      <RedBackgroundHeading>Car Care Tips</RedBackgroundHeading>
      <Container style={{ margin: "2rem auto 3rem" }}>
        <NormalPara>
          Your vehicle can last for well over a decade with proper maintenance
          and repairs. Compared with the cost of purchasing a new vehicle, it
          pays to take good care of your car. Preventative maintenance will help
          you retain your car's condition longer, and it also helps you prevent
          unexpected automotive repairs. Regularly scheduled maintenance and
          lubrication using the manufacturer’s recommended intervals is the best
          way to proactively take care of your vehicle. Replacing normal
          wear-and-tear parts before they break is also a good path to follow on
          the road to long vehicle life.
        </NormalPara>
        <NormalPara>
          At Mimidas Tire & Auto, we want our customers in La Crosse, WI and
          surrounding areas to get the most out of their vehicles. Follow the
          car maintenance tips below to keep your vehicle around longer.
        </NormalPara>
        <RedBackgroundHeading>
          Keep an Eye on Fluids and Filters
        </RedBackgroundHeading>
        <List>
          <ListItem>
            <NormalPara>
              Your car’s engine is full of sensitive and delicate moving parts
              that rely on fluids like oil, transmission fluid, and coolant to
              function well. If you don’t keep an eye on these fluid levels or
              periodically change its filters, these delicate parts could face
              irreparable damage.
            </NormalPara>
          </ListItem>
          <ListItem>
            <NormalPara>
              Your car’s brakes also require brake fluid to transfers the force
              to the brakes to slow or stop your vehicle. It's possible for
              brake fluid to lose its effectiveness or for leaks to occur. If
              you experience abnormal brake performance, make sure to have your
              car checked.
            </NormalPara>
          </ListItem>
          <ListItem>
            <NormalPara>
              Coolant or antifreeze prevents overheating and freezing of the
              engine's cooling system. Like brake fluid, recommended service
              intervals vary by manufacturer and can range from roughly a few
              years to a recommended check during every scheduled maintenance
              service. Keep an eye on your coolant level to ensure there aren't
              any leaks. If you ever see the engine temperature warning light
              turn on, there might be something wrong with your coolant or the
              amount of coolant remaining.
            </NormalPara>
          </ListItem>
        </List>
        <RedBackgroundHeading>Automotive Part Replacement</RedBackgroundHeading>
        <List>
          <ListItem>
            <NormalPara>
              Your vehicle’s brakes should be examined at least once a year to
              identify any wear and tear and need for repair. Brake pads and
              rotors typically last anywhere from 35,000 to 60, 000 miles
              depending on how often you stop while driving and how thin or
              thick the rotors and pads are initially
            </NormalPara>
          </ListItem>
          <ListItem>
            <NormalPara>
              Your car’s battery typically lasts 4-5 years, depending on outdoor
              temperature, driving frequency, and overall use among other
              influences. To maximize battery life, keep your battery clean;
              don't leave your car unused for an extended period, and don't
              forget to shut off the interior lights and headlights when your
              car isn't in use.
            </NormalPara>
          </ListItem>
          <ListItem>
            <NormalPara>
              Driving with bad headlights can be very dangerous. Restoring your
              headlights can have it looking like new and can shine up to 3.4x
              lighter when driving. You can slow oxidation caused by heat,
              sunlight, pollution, and harsh chemicals by parking in a garage
              when possible.
            </NormalPara>
          </ListItem>
        </List>
        <RedBackgroundHeading>Tires and Wheels</RedBackgroundHeading>
        <List>
          <ListItem>
            <NormalPara>
              A car’s wheels and tires are essential to the safety and
              performance of your vehicle. Inspect your tires and wheels
              regularly for symptoms such as low inflation pressure, uneven wear
              patterns, or excessive wear. You should also take time to keep
              them at the proper pressure for better fuel economy.
            </NormalPara>
          </ListItem>
          <ListItem>
            <NormalPara>
              Tire services such as a tire rotation, wheel alignment, tire
              balancing, and tire repair can help maximize tire life and improve
              your safety. Your vehicle’s owner’s manual will provide a schedule
              for the recommended time to perform tire services.
            </NormalPara>
          </ListItem>
        </List>
        <NormalPara>
          By following these tips and the service intervals listed inside your
          owner’s manual, you can protect your vehicle from major repairs and
          unexpected failures. Proper vehicle maintenance can save you money in
          the long run and improve your safety and the safety of your
          passengers. Stay on top of routine vehicle maintenance and visit at
          Mimidas Tire & Auto in Lake Orion, when your vehicle needs to be
          serviced by our experienced mechanics.
        </NormalPara>
        <OptimizedButtonLink to={"/find-us/contact"}>
          <i className="fi fi-sr-envelope"></i>
          Contact Us About Car Care Tips
        </OptimizedButtonLink>
      </Container>
    </CarCarePageContainer>
  );
};

const CarCarePageContainer = styled.div``;

export default CarCareTips;
