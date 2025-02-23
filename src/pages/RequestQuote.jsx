import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Container,
  FormButton,
  GridLayoutContainer,
  LeftContainer,
  NormalPara,
  RedBackgroundHeading,
  RightContainer,
  RowFlex,
  SectionPara,
} from "../components/reusables/Styles";
import {
  FormGroup,
  FormGroupComponent,
  Input,
  Label,
} from "../components/reusables/Components";
import { useGlobalContext } from "../contexts/GlobalContext";
import { contactOptions } from "./ScheduleService";
import { toast } from "react-toastify";
import serviceLocations from "../data/service-location-data";
import { SearchComponent } from "../components/Advert";
import { LocationModal } from "./ScheduleService";
import hoursOfOperation from "../data/hours-of-operation";
import { waitOptions } from "./ScheduleService";

const customId = "kl239wesdjof";

// const selects = ["year", "model", "make", "state", "option"];
const selects = ["state"];

const requiredFields = [
  "serviceType",
  "year",
  "model",
  "make",
  "firstAppointmentDate",
  "secondAppointmentDate",
  "staying",
  "firstName",
  "lastName",
  "email",
  "phoneNumber",
  // "address",
  // "city",
  // "state",
  // "zipCode",
  // "comment",
  "sendEmailsAndPromo",
  "serviceLocation",
];

const RequestQuote = () => {
  const {
    states,
    services,
    allFieldsPresent,
    emailValidator,
    telephoneValidator,
    formatTelephone,
    submitEmail,
    currentStoreLocation,
    setCurrentStoreLocation,
    displayLocationModal,
  } = useGlobalContext();
  const [quotingData, setQuotingData] = useState({
    sendEmailsAndPromo: "No",
    serviceLocation: currentStoreLocation?.shopLocation,
  });
  const { state } = useLocation();
  const quotingForm = useRef(null);
  const [disableBtn, setDisableBtn] = useState(false);

  const stateUpdater = (name, value) => {
    setQuotingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    if (["phoneNumber", "zipCode", "year"].includes(name))
      return telephoneValidator(stateUpdater, e);
    if (name === "sendEmailsAndPromo") {
      if (e.target.checked) {
        return setQuotingData((prev) => ({
          ...prev,
          [name]: e.target.value,
        }));
      }
      return setQuotingData((prev) => ({ ...prev, [name]: "No" }));
    }
    let value = e.target.value;
    if (name === "serviceType") {
      return setQuotingData((prev) => {
        if (!prev.serviceType || prev.serviceType.length === 0) {
          return { ...prev, [name]: [value] };
        }
        let alreadyExist = prev.serviceType.find((type) => type === value);
        if (!alreadyExist) return { ...prev, [name]: [...prev[name], value] };
        let newServiceTypes = prev.serviceType.filter((type) => type !== value);
        return { ...prev, [name]: newServiceTypes };
      });
    }
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
    setQuotingData((prev) => ({
      ...prev,
      serviceLocation: currentStoreLocation?.shopLocation,
    }));
  }, [currentStoreLocation]);

  const validateForm = (e) => {
    e.preventDefault();
    if (quotingData?.serviceType?.length === 0 || !quotingData.serviceType)
      return toast.error("Must select at least one service", {
        toastId: customId,
      });

    if (!allFieldsPresent(requiredFields, quotingData)) {
      return toast.error("Please fill all field", { toastId: customId });
    }

    if (!quotingData.serviceLocation) {
      return toast.error("Please select a location", { toastId: customId });
    }

    if (!emailValidator(quotingData.email)) {
      return toast.error("Please provide a valid email...", {
        toastId: customId,
      });
    }
    if (quotingData.phoneNumber.length < 14) {
      return toast.error("Please provide a valid telephone.", {
        toastId: customId,
      });
    }
    if (quotingData.year.length < 4) {
      return toast.error("Please provide a valid vehicle year.", {
        toastId: customId,
      });
    }

    setDisableBtn(true);
    const formData = new FormData(quotingForm.current);
    formData.append("heading", "New Quoting request for Mimidas Tire & Auto");
    formData.append("template", "quote");
    formData.set("sendEmailsAndPromo", quotingData.sendEmailsAndPromo);
    formData.append("firstAppointmentDate", quotingData?.firstAppointmentDate);
    formData.append(
      "secondAppointmentDate",
      quotingData?.secondAppointmentDate
    );
    formData.append("serviceLocation", quotingData?.serviceLocation);
    formData.append("submissionEmail", currentStoreLocation?.email);
    submitEmail(
      formData,
      () => {
        setDisableBtn(false);
      },
      () => {
        Object.keys(quotingData).forEach((key) => {
          if (key === "sendEmailsAndPromo") return stateUpdater(key, "No");
          if (key === "serviceType") return stateUpdater(key, []);
          return stateUpdater(key, "");
        });
      }
    );
  };

  return (
    <QuotingPageContainer>
      <RedBackgroundHeading>Your Quote Cart</RedBackgroundHeading>
      <QuotingForm ref={quotingForm}>
        <Container style={{ margin: "2rem auto" }}>
          <OptimizedSectionPara>
            We will send you a quote of the following:
          </OptimizedSectionPara>
          <SelectedQuotingContainer>
            {quotingData?.serviceType?.map((type) => (
              <QuotingPara>{type}</QuotingPara>
            ))}
          </SelectedQuotingContainer>
          <OptimizedSectionPara>
            Select an additional service you need:
          </OptimizedSectionPara>
          <OptimizedGridLayout style={{ margin: "1rem" }}>
            <FormGroupComponent
              type={"checkbox"}
              name={"serviceType"}
              options={services.slice(1)}
              onChange={handleInputChange}
              radioSelections={quotingData?.serviceType || []}
            />
          </OptimizedGridLayout>
          <OptimizedSectionPara>
            Please provide your vehicle information:
          </OptimizedSectionPara>
          <SearchComponent
            showShowModal={displayLocationModal}
            currentLocation={currentStoreLocation}
            style={{ marginTop: "1.5rem" }}
            linkType={"link"}
            hideBrowseLink={true}
          />
          {/* <OptimizedFormButton onClick={displaySearchModal}>
            Continue{" "}
            <i className="fi fi-sr-arrow-up-right-from-square"></i>
          </OptimizedFormButton> */}
          <OptimizedGridLayout style={{ margin: "0 1rem 1rem" }}>
            <LeftContainer>
              {/* <FormGroupComponent
                type={"select"}
                options={["--Select Year--", ...modelYears.reverse()]}
                name={"year"}
                value={quotingData?.year}
                placeholder={"Select Year"}
                onChange={handleInputChange}
              /> */}
              <FormGroupComponent
                type={"text"}
                name={"year"}
                maxLength={4}
                value={quotingData?.year}
                label={""}
                placeholder={"Enter Vehicle year"}
                onChange={handleInputChange}
              />
              {/* <FormGroupComponent
                type={"select"}
                options={["--Select Model--", ...models]}
                name={"model"}
                value={quotingData?.model}
                placeholder={"Select Model"}
                onChange={handleInputChange}
              /> */}
              <FormGroupComponent
                type={"text"}
                name={"make"}
                value={quotingData?.make}
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
                value={quotingData?.make}
                placeholder={"Select Make"}
                onChange={handleInputChange}
              /> */}
              <FormGroupComponent
                type={"text"}
                name={"model"}
                value={quotingData?.model}
                label={""}
                placeholder={"Enter Vehicle Model"}
                onChange={handleInputChange}
              />
              <FormGroupComponent
                type={"text"}
                name={"subModel"}
                value={quotingData?.subModel}
                label={""}
                placeholder={"Enter Vehicle Sub Model"}
                onChange={handleInputChange}
              />
              {/* <FormGroupComponent
                type={"select"}
                options={[]}
                name={"option"}
                value={quotingData?.option}
                placeholder={"Select Option"}
                onChange={handleInputChange}
              /> */}
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
                value={quotingData?.firstAppointmentDate}
                onChange={handleInputChange}
                name={"firstAppointmentDate"}
              />
              <FormGroupComponent
                type={"date-time"}
                label={"Select second choice appointment:"}
                value={quotingData?.secondAppointmentDate}
                onChange={handleInputChange}
                name={"secondAppointmentDate"}
              />
              <FormGroupComponent
                generalName={"Will you wait while we work?:"}
                name={"staying"}
                options={waitOptions}
                type={"radio"}
                value={quotingData?.staying}
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
          <OptimizedSectionPara>
            Tell us a little about yourself:
          </OptimizedSectionPara>
          <OptimizedGridLayout>
            <FormGroupComponent
              type={"text"}
              name={"firstName"}
              value={quotingData?.firstName}
              label={"First Name: *"}
              onChange={handleInputChange}
              placeholder={"Enter your last name"}
            />
            <FormGroupComponent
              type={"text"}
              name={"lastName"}
              value={quotingData?.lastName}
              label={"Last Name: *"}
              onChange={handleInputChange}
              placeholder={"Enter your last name"}
            />
            <FormGroupComponent
              type={"email"}
              name={"email"}
              value={quotingData?.email}
              onChange={handleInputChange}
              label={"Email: *"}
              placeholder={"Enter your email"}
            />
            <FormGroupComponent
              type={"text"}
              name={"phoneNumber"}
              value={formatTelephone(quotingData?.phoneNumber)}
              onChange={handleInputChange}
              label={"Phone(xxx)xxx-xxxx: *"}
              placeholder={"Enter your phone number"}
              maxLength={14}
            />
            <FormGroupComponent
              type={"text"}
              name={"address"}
              value={quotingData?.address}
              onChange={handleInputChange}
              label={"Address: "}
              placeholder={"Enter your address"}
              style={fullColumn}
            />
            <FormGroupComponent
              type={"text"}
              name={"city"}
              value={quotingData?.city}
              onChange={handleInputChange}
              label={"City: "}
              placeholder={"Enter your city"}
            />
            <FormGroupComponent
              type={"select"}
              keyValueSelect={true}
              name={"state"}
              value={quotingData?.state}
              onChange={handleInputChange}
              label={"State: "}
              placeholder={"Choose State"}
              options={states}
            />
            <FormGroupComponent
              type={"text"}
              name={"zipCode"}
              value={quotingData?.zipCode}
              onChange={handleInputChange}
              label={"Zip Code: "}
              placeholder={"Enter zip code"}
              maxLength={8}
            />
            <FormGroupComponent
              type={"textarea"}
              shouldResize={"vertical"}
              name={"comment"}
              value={quotingData?.comment}
              onChange={handleInputChange}
              label={"Comment: "}
              placeholder={"Enter your comment"}
              inputStyle={{ minHeight: "150px" }}
            />
            <FormGroup
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: "0.5rem",
                ...fullColumn,
              }}
            >
              <Input
                type="checkbox"
                name="sendEmailsAndPromo"
                value={"Yes"}
                onChange={handleInputChange}
                style={{ minWidth: "initial", width: "initial" }}
                id={"sendEmailsAndPromo"}
              />
              <Label htmlFor={"sendEmailsAndPromo"}>
                I would like to receive periodic emails regarding special offers
                and/or promotions.
              </Label>
            </FormGroup>
          </OptimizedGridLayout>
          <Button onClick={validateForm} disabled={disableBtn}>
            Submit Request
          </Button>
        </Container>
      </QuotingForm>
    </QuotingPageContainer>
  );
};

const QuotingPageContainer = styled.div``;

const OptimizedFormButton = styled(FormButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;

  i {
    display: flex;

    @media (max-width: 270px) {
      display: none;
    }
  }
`;

const OptimizedSectionPara = styled(SectionPara)`
  text-align: left;
  margin-top: 2rem;
`;

const OptimizedGridLayout = styled(GridLayoutContainer)`
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem auto;
  max-width: 928px;

  @media (max-width: 720px) {
    grid-template-columns: ${(props) =>
      props.waitTillMobile ? "repeat(2, 1fr)" : "1fr"};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 0 !important;
  }
`;

const fullColumn = { gridColumn: "1 / -1" };

const Address = styled.address``;

const SelectedQuotingContainer = styled.div`
  padding: 1rem;
  background: #f1f1f1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  margin: 1rem 0;
`;

const QuotingPara = styled.p`
  font-size: 1.1rem;
  font-family: var(--teko);
`;

const QuotingForm = styled.form``;

export default RequestQuote;
