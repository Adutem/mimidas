import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Form,
  FormButton,
  GridLayoutContainer,
  LeftContainer,
  NormalPara,
  PortalModalContainer,
  RedBackgroundHeading,
  RightContainer,
  RowFlex,
  SectionPara,
} from "../components/reusables/Styles";
import { FormGroupComponent } from "../components/reusables/Components";
import { useGlobalContext } from "../contexts/GlobalContext";
import hoursOfOperation from "../data/hours-of-operation";
import GoogleMapComp from "../components/reusables/GoogleMapComp";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import serviceLocations from "../data/service-location-data";
import { SearchComponent } from "../components/Advert";

export const waitOptions = [
  {
    label: "I will wait for my vehicle",
    value: "true",
  },
  {
    label: "I will leave my vehicle",
    value: "false",
  },
];

export const contactOptions = [
  {
    label: "Telephone",
    value: "telephone",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Text (SMS)",
    value: "SMS",
  },
];

const requiredFields = [
  "serviceType",
  "message",
  "year",
  "model",
  "make",
  "firstAppointmentDate",
  "secondAppointmentDate",
  "staying",
  "fullName",
  "email",
  "tel",
  "streetAddress",
  "city",
  "state",
  "zipCode",
  "contactThrough",
  "serviceLocation",
];

const customId = "schedule-service-toast";

// const selects = ["serviceType", "year", "model", "make", "option", "state"];
const selects = ["serviceType", "state"];

const ScheduleService = () => {
  const {
    currentStoreLocation,
    setCurrentStoreLocation,
    allFieldsPresent,
    emailValidator,
    telephoneValidator,
    formatTelephone,
    submitEmail,
    displayLocationModal,
  } = useGlobalContext();
  const [serviceData, setServiceData] = useState({
    serviceLocation: currentStoreLocation?.shopLocationn,
  });
  const { states, services } = useGlobalContext();
  const { state } = useLocation();
  const [disableAll, setDisableAll] = useState(false);
  const scheduleForm = useRef(null);

  const stateUpdater = (name, value) => {
    setServiceData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    if (["tel", "zipCode", "year"].includes(name))
      return telephoneValidator(stateUpdater, e);
    let value = e.target.value;
    if (
      selects.includes(name) &&
      value.startsWith("--") &&
      value.endsWith("--")
    )
      return stateUpdater(name, "");
    stateUpdater(name, value);
  };

  useEffect(() => {
    if (state && state?.serviceName) {
      handleInputChange({
        target: { name: "serviceType", value: state.serviceName },
      });
    }
  }, []);

  useEffect(() => {
    setServiceData((prev) => ({
      ...prev,
      serviceLocation: currentStoreLocation?.shopLocation,
    }));
  }, [currentStoreLocation]);

  const validateForm = (e) => {
    e.preventDefault();
    // return console.log(serviceData);
    if (!allFieldsPresent(requiredFields, serviceData)) {
      return toast.error("Please fill all field", { toadId: customId });
    }
    if (!emailValidator(serviceData.email)) {
      return toast.error("Please provide a valid email...", {
        toastId: customId,
      });
    }
    if (serviceData.tel.length < 14) {
      return toast.error("Please provide a valid telephone.", {
        toastId: customId,
      });
    }
    if (serviceData.message.length < 20) {
      return toast.error("Message cannot be less than 20 characters", {
        toastId: customId,
      });
    }
    if (serviceData.year.length < 4) {
      return toast.error("Please provide a valid vehicle year.", {
        toastId: customId,
      });
    }

    setDisableAll(true);
    const formData = new FormData(scheduleForm.current);
    formData.append("heading", "New email for Mimidas Tire & Auto");
    formData.append("template", "service");
    formData.append("firstAppointmentDate", serviceData?.firstAppointmentDate);
    formData.append(
      "secondAppointmentDate",
      serviceData?.secondAppointmentDate
    );
    formData.append("serviceLocation", serviceData?.serviceLocation);
    formData.append("submissionEmail", currentStoreLocation?.email);
    submitEmail(
      formData,
      () => {
        setDisableAll(false);
      },
      () => {
        Object.keys(serviceData).forEach((key) => {
          if (key === "serviceLocation")
            return setServiceData((prev) => ({
              ...prev,
              [key]: serviceLocations[0],
            }));
          return stateUpdater(key, "");
          // setServiceData((prev) => ({ ...prev, [key]: "" }));
        });
      }
    );
  };

  return (
    <SchedulePageContainer>
      <RedBackgroundHeading>Schedule My Service</RedBackgroundHeading>
      <Container style={{ marginBottom: "2rem" }}>
        <NormalPara>
          Please use the form below to submit a scheduled service request to us.
          Submitting this form does not quarantee that the time you're choosing
          is available, but we will be in touch with you within 24 hours, to
          schedule a time that will work for you.
        </NormalPara>
        <NormalPara>Required fields are marked with *</NormalPara>
        <OptimizedSectionPara>Service Explanation</OptimizedSectionPara>
        <ScheduleServiceForm ref={scheduleForm}>
          <OptimizedGridLayout>
            <FormGroupComponent
              type={"select"}
              options={services}
              label={"Select a service:"}
              name={"serviceType"}
              placeholder={"I'm not sure"}
              style={fullColumn}
              onChange={handleInputChange}
              value={serviceData?.serviceType}
            />
            <FormGroupComponent
              type={"textarea"}
              label={"Include a message to our technicians:"}
              name={"message"}
              placeholder={"Enter your message"}
              style={fullColumn}
              onChange={handleInputChange}
              value={serviceData?.message}
              shouldResize="vertical"
            />
          </OptimizedGridLayout>
          <OptimizedSectionPara style={fullColumn}>
            Please enter your vehicle information:
          </OptimizedSectionPara>

          {/* <OptimizedFormButton
              style={{ ...fullColumn, background: "#f1f1f1", color: "#000" }}
              onClick={showShowModal}
            >
              click to Select a service location
              <i className="fi fi-sr-caret-down"></i>
            </OptimizedFormButton>
            <OptimizedSectionPara style={fullColumn}>
              Appointment Location
            </OptimizedSectionPara>
            <div style={{ ...fullColumn }}>
              <LocationCard
                {...serviceData.serviceLocation}
                style={{ background: "transparent", padding: 0 }}
              />
            </div> */}
          <SearchComponent
            showShowModal={displayLocationModal}
            currentLocation={currentStoreLocation}
            style={{ marginTop: "1.5rem" }}
            linkType={"link"}
            hideBrowseLink={true}
          />
          <OptimizedGridLayout>
            <LeftContainer>
              {/* <FormGroupComponent
                type={"select"}
                options={["--Select Year--", ...modelYears.reverse()]}
                name={"year"}
                value={serviceData?.year}
                placeholder={"Select Year"}
                onChange={handleInputChange}
              /> */}
              <FormGroupComponent
                type={"text"}
                name={"year"}
                maxLength={4}
                value={serviceData?.year}
                label={""}
                placeholder={"Enter Vehicle year"}
                onChange={handleInputChange}
              />
              {/* <FormGroupComponent
                type={"select"}
                options={["--Select Model--", ...models]}
                name={"model"}
                value={serviceData?.model}
                placeholder={"Select Model"}
                onChange={handleInputChange}
              /> */}
              <FormGroupComponent
                type={"text"}
                name={"make"}
                value={serviceData?.make}
                label={""}
                placeholder={"Enter Vehicle Make"}
                onChange={handleInputChange}
              />
            </LeftContainer>
            <RightContainer>
              {/* <FormGroupComponent
                type={"select"}
                options={["--Select Make--", ...makes]}
                name={"make"}
                value={serviceData?.make}
                placeholder={"Select Make"}
                onChange={handleInputChange}
              /> */}
              <FormGroupComponent
                type={"text"}
                name={"model"}
                value={serviceData?.model}
                label={""}
                placeholder={"Enter Vehicle Model"}
                onChange={handleInputChange}
              />
              {/* <FormGroupComponent
                type={"select"}
                options={[]}
                name={"option"}
                value={serviceData?.option}
                placeholder={"Select Option"}
                onChange={handleInputChange}
              /> */}
              <FormGroupComponent
                type={"text"}
                name={"subModel"}
                value={serviceData?.subModel}
                label={""}
                placeholder={"Enter Vehicle Sub Model"}
                onChange={handleInputChange}
              />
            </RightContainer>
          </OptimizedGridLayout>

          <OptimizedGridLayout waitTillTab={true}>
            <OptimizedSectionPara style={fullColumn}>
              Appointment Details
            </OptimizedSectionPara>
            <LeftContainer>
              <FormGroupComponent
                type={"date-time"}
                label={"Select first choice appointment:"}
                value={serviceData?.firstAppointmentDate}
                onChange={handleInputChange}
                name={"firstAppointmentDate"}
              />
              <FormGroupComponent
                type={"date-time"}
                label={"Select second choice appointment:"}
                value={serviceData?.secondAppointmentDate}
                onChange={handleInputChange}
                name={"secondAppointmentDate"}
              />
              <FormGroupComponent
                generalName={"Will you wait while we work?:"}
                name={"staying"}
                options={waitOptions}
                type={"radio"}
                value={serviceData?.staying}
                onChange={handleInputChange}
              />
            </LeftContainer>
            <RightContainer>
              {/* <GoogleMapComp style={{ marginTop: "0" }} /> */}
              <OptimizedSectionPara style={{ fontSize: "1.3rem" }}>
                Hours
              </OptimizedSectionPara>
              <div style={{ margin: "1rem 0 1.5rem" }}>
                {hoursOfOperation.map((hop) => (
                  <NormalPara style={{ margin: "0.5rem 0" }}>
                    {hop.date}: {hop.hours.join(" - ")}
                  </NormalPara>
                ))}
              </div>
            </RightContainer>
          </OptimizedGridLayout>
          <OptimizedSectionPara>Personal Information</OptimizedSectionPara>
          <OptimizedGridLayout>
            <FormGroupComponent
              type={"text"}
              name={"fullName"}
              value={serviceData?.fullName}
              label={"Name: *"}
              style={fullColumn}
              onChange={handleInputChange}
              placeholder={"Enter your fullname"}
            />
            <FormGroupComponent
              type={"email"}
              name={"email"}
              value={serviceData?.email}
              onChange={handleInputChange}
              label={"Email: *"}
              placeholder={"Enter your email"}
            />
            <FormGroupComponent
              type={"text"}
              name={"tel"}
              value={formatTelephone(serviceData?.tel)}
              onChange={handleInputChange}
              label={"Phone(xxx)xxx-xxxx: *"}
              placeholder={"Enter your phone number"}
              maxLength={14}
            />
            <FormGroupComponent
              type={"text"}
              name={"streetAddress"}
              value={serviceData?.streetAddress}
              onChange={handleInputChange}
              label={"Street Address: "}
              placeholder={"Enter your address"}
              style={fullColumn}
            />
            <FormGroupComponent
              type={"text"}
              name={"city"}
              value={serviceData?.city}
              onChange={handleInputChange}
              label={"City: "}
              placeholder={"Enter your city"}
            />
            <FormGroupComponent
              type={"select"}
              keyValueSelect={true}
              name={"state"}
              value={serviceData?.state}
              onChange={handleInputChange}
              label={"State: "}
              placeholder={"Choose State"}
              options={states}
            />
            <FormGroupComponent
              type={"text"}
              name={"zipCode"}
              value={serviceData?.zipCode}
              onChange={handleInputChange}
              label={"Zip: "}
              placeholder={"Enter zip code"}
              maxLength={8}
            />
            <FormGroupComponent
              generalName={"How would you prefer to be contacted?:"}
              name={"contactThrough"}
              options={contactOptions}
              type={"radio"}
              value={serviceData?.contactThrough}
              onChange={handleInputChange}
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0 1.5rem",
                alignSelf: "start",
              }}
            />
          </OptimizedGridLayout>
          <Button onClick={validateForm}>Submit Request</Button>
        </ScheduleServiceForm>
        <NormalPara>
          The use of the tire and other automotive data and information
          accessible through this webpage is limited to and intended for persons
          located in the United States of America and Canada.
        </NormalPara>
        <OptimizedSectionPara>
          ALTHOUGH THE DATA AND INFORMATION ARE BELIEVED TO BE ACCURATE, NO
          WARRANTY OR GUARANTEE IS MADE REGARDING THE QUALITY OR ACCURACY OF THE
          DATA. YOU ASSUME ALL RISK RELATED TO THE DATA AND ITS USE.
        </OptimizedSectionPara>
      </Container>
      {/* {showLocationModal && (
        <LocationModal
          portalRef={portalRef}
          hideShowModal={hideShowModal}
          handleInputChange={handleStoreLocationChange}
        />
      )} */}
    </SchedulePageContainer>
  );
};

const SchedulePageContainer = styled.div``;

const OptimizedSectionPara = styled(SectionPara)`
  text-align: left;
`;

const OptimizedGridLayout = styled(GridLayoutContainer)`
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem auto;
  max-width: 928px;

  @media (max-width: 720px) {
    grid-template-columns: ${(props) =>
      props.waitTillMobile || props.waitTillTab ? "repeat(2, 1fr)" : "1fr"};
  }

  @media (max-width: 600px) {
    grid-template-columns: ${(props) => (props.waitTillTab ? "1fr" : "1fr")};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
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

const OptimizedFormLink = styled(FormButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: max-content;

  i {
    display: flex;

    @media (max-width: 270px) {
      display: none;
    }
  }
`;

const LocationsContainer = styled.div`
  width: 90%;
  max-width: 800px;
  height: min(75%, 600px);
  background: var(--white);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2), 0px 8px 25px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HideButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LocationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  // background: red;
  flex: 1;
  overflow: auto;
  margin: 1rem;
`;

const ScheduleServiceForm = styled.form``;

const fullColumn = { gridColumn: "1 / -1" };

const Address = styled.address``;
export default ScheduleService;

const LocationCardCont = styled.div`
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: #f3f3f3;
  transition: 0.3s ease;

  &:hover {
    background: lightgray;
  }
`;

const LocationCard = ({
  shopLocation,
  phoneNumber,
  email,
  link,
  couponLink,
  financingLink,
  handleInputChange,
  hideShowModal,
  ...rest
}) => {
  const handleSelect = (e) => {
    e.preventDefault();

    handleInputChange &&
      handleInputChange({
        target: {
          name: "serviceLocation",
          value: {
            shopLocation,
            phoneNumber,
            email,
            link,
            couponLink,
            financingLink,
            ...rest,
          },
        },
      });
    hideShowModal && hideShowModal();
  };
  return (
    <LocationCardCont onClick={handleSelect} {...rest}>
      <NormalPara
        style={{
          margin: 0,
          fontSize: "1rem",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        {shopLocation}
      </NormalPara>
      <NormalPara style={{ fontSize: "0.85rem", margin: 0 }}>
        Phone Number:{" "}
        <a href={`tel:+${phoneNumber.replace(/\-/g, "")}`}>{phoneNumber}</a>
      </NormalPara>
      <NormalPara style={{ fontSize: "0.75rem", margin: 0 }}>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </NormalPara>
    </LocationCardCont>
  );
};

export function LocationModal({ portalRef, hideShowModal, handleInputChange }) {
  return (
    <PortalModalContainer
      onClick={(e) => {
        e.preventDefault();
        if (e.target !== portalRef.current) return;
        hideShowModal();
      }}
      ref={portalRef}
    >
      <LocationsContainer>
        <HideButtonContainer>
          <OptimizedFormButton
            onClick={hideShowModal}
            style={{ width: "initial", minWidth: "initial" }}
          >
            <i className="fi fi-sr-circle-xmark"></i>
          </OptimizedFormButton>
        </HideButtonContainer>
        <LocationCardContainer>
          {serviceLocations.map((location) => (
            <LocationCard
              {...location}
              handleInputChange={handleInputChange}
              hideShowModal={hideShowModal}
            />
          ))}
        </LocationCardContainer>
      </LocationsContainer>
    </PortalModalContainer>
  );
}
