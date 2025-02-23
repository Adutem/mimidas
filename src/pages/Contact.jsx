import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  RedBackgroundHeading,
  Container,
  FormButton,
} from "../components/reusables/Styles";
import { Link } from "react-router-dom";
import { FormGroupComponent } from "../components/reusables/Components";
import { toast } from "react-toastify";
import { toastError, useGlobalContext } from "../contexts/GlobalContext";

const requiredFields = ["firstName", "lastName", "email", "tel", "message"];
let customId = "contact-toast";
const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [disableAll, setDisableAll] = useState(false);
  const contactForm = useRef(null);
  const {
    allFieldsPresent,
    emailValidator,
    telephoneValidator,
    formatTelephone,
    submitEmail,
    currentStoreLocation,
  } = useGlobalContext();

  const stateUpdater = (name, value) => {
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    if (e.target.name === "tel") return telephoneValidator(stateUpdater, e);
    let name = e.target.name;
    let value = e.target.value;
    stateUpdater(name, value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (!allFieldsPresent(requiredFields, contactData)) {
      return toast.error("Please fill all fields...", { toastId: customId });
    }
    if (!currentStoreLocation) {
      return toastError("Please pick a store", customId);
    }
    if (!emailValidator(contactData.email)) {
      return toast.error("Please provide a valid email...", {
        toastId: customId,
      });
    }
    if (contactData.tel.length < 14) {
      return toast.error("Please provide a valid telephone.", {
        toastId: customId,
      });
    }
    if (contactData.message.length < 12) {
      return toast.error("Comment cannot be less than 12 characters", {
        toastId: customId,
      });
    }
    setDisableAll(true);
    const formData = new FormData(contactForm.current);
    formData.append("heading", "New email for Mimidas Tire & Auto");
    formData.append("template", "contact");
    formData.append("submissionEmail", currentStoreLocation?.email);
    submitEmail(
      formData,
      () => {
        setDisableAll(false);
      },
      () => {
        Object.keys(contactData).forEach((key) =>
          setContactData((prev) => ({ ...prev, [key]: "" }))
        );
      }
    );
  };

  return (
    <ContactPageContainer>
      <RedBackgroundHeading>Contact Us</RedBackgroundHeading>
      <Container>
        <AddressSection>
          <FindUsLinkItem>Mimidas Tire & Auto</FindUsLinkItem>
          {/* <AddressPara>591 S Lapeer Road</AddressPara>
          <AddressPara>Lake Orion, MI 48362</AddressPara> */}
          {currentStoreLocation && (
            <>
              <AddressPara>
                Location: {currentStoreLocation?.shopLocation}
              </AddressPara>
              <AddressPara>
                Phone:{" "}
                <a href={`tel: +1 ${currentStoreLocation?.phoneNumber}`}>
                  {currentStoreLocation?.phoneNumber}
                </a>
              </AddressPara>
              <AddressPara>
                <a
                  href={`${currentStoreLocation?.facebookLink}`}
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Visit our page:{" "}
                  <i
                    className="fi fi-brands-facebook"
                    style={{
                      color: "blue",
                      display: "flex",
                      fontSize: "2rem",
                      marginLeft: "1rem",
                    }}
                  ></i>
                </a>
              </AddressPara>
            </>
          )}
        </AddressSection>
      </Container>{" "}
      <RedBackgroundHeading>Contact Form</RedBackgroundHeading>
      <Container>
        <ContactForm ref={contactForm}>
          <GridLayoutContainer>
            <LeftContainer>
              <FormGroupComponent
                label={"First Name"}
                placeholder={"Enter First Name"}
                name={"firstName"}
                value={contactData?.firstName}
                onChange={handleInputChange}
                type={"text"}
              />
              <FormGroupComponent
                label={"Last Name"}
                placeholder={"Enter Last Name"}
                name={"lastName"}
                value={contactData?.lastName}
                onChange={handleInputChange}
                type={"text"}
              />
              <FormGroupComponent
                label={"Email Address"}
                placeholder={"Enter Email Address"}
                name={"email"}
                value={contactData?.email}
                onChange={handleInputChange}
                type={"email"}
              />
            </LeftContainer>
            <RightContainer>
              <FormGroupComponent
                label={"Telephone(xxx)-xxx-xxx"}
                placeholder={"Enter tel"}
                name={"tel"}
                value={formatTelephone(contactData?.tel)}
                onChange={handleInputChange}
                type={"text"}
                maxLength={14}
              />
              <FormGroupComponent
                label={"Questions/Comments (Required):"}
                placeholder={"Enter message here"}
                name={"message"}
                value={contactData?.message}
                onChange={handleInputChange}
                type={"textarea"}
              />
            </RightContainer>
          </GridLayoutContainer>
          <FormButton
            onClick={validateForm}
            aria-disabled={disableAll}
            disabled={disableAll}
          >
            Submit
          </FormButton>
        </ContactForm>
      </Container>
    </ContactPageContainer>
  );
};

const ContactPageContainer = styled.div``;

const AddressSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const FindUsLinkItem = styled(Link)`
  font-weight: bold;
  text-decoration: underline;
  color: var(--primary-color);
  font-family: var(--mont);
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &:hover {
    text-decoration: none;
  }
`;

const AddressPara = styled.p`
  font-weight: 400;
  font-family: var(--mont);
  font-size: 0.9rem;
  color: black;

  a {
    text-decoration: underline;
    color: var(--primary-color);

    &:hover {
      text-decoration: none;
    }
  }
`;

const ContactForm = styled.form`
  margin: 3rem 0;
`;

const GridLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div``;
export default Contact;
