import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  RedBackgroundHeading,
  Container,
  FormButton,
  Form,
  GridLayoutContainer,
  LeftContainer,
  RightContainer,
  SectionPara,
  NormalPara,
} from "../components/reusables/Styles";
import { FormGroupComponent } from "../components/reusables/Components";
import { FILE_FORMATS, useGlobalContext } from "../contexts/GlobalContext";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getCareer } from "../redux";
import { CareerCard, CareerCardContainer } from "./admin/Career";

const customId = "job-toast";

const states = [
  "--Select--",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
];

// const leftGroup = [{label: "First Name", placeholder: "Enter First Name", name: "firstName", v}];
const requiredFields = [
  "firstName",
  "lastName",
  "email",
  "address",
  "city",
  "state",
  "zipCode",
  "tel",
  "positionApplyingFor",
  "resume",
];

const Jobs = () => {
  const [jobData, setJobData] = useState(() => new FormData());
  const [disableAll, setDisableAll] = useState(false);
  const jobForm = useRef(null);
  const {
    allFieldsPresent,
    emailValidator,
    telephoneValidator,
    formatTelephone,
    submitEmail,
    currentStoreLocation,
  } = useGlobalContext();
  const { careers, loading } = useSelector((state) => state.career);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStoreLocation) {
      dispatch(getCareer(currentStoreLocation.shopLocation));
    }
  }, [currentStoreLocation]);

  const stateUpdater = (name, value) => {
    setJobData((prev) => {
      let copyData = new FormData();
      for (const [key, value] of prev) {
        copyData.append(key, value);
      }
      if (name === "resume" && value.length === 0) {
        value = "";
      }
      // let formatedValue = (typeof value) === "string" ? value.trim() : value;
      if (copyData.has(name)) {
        copyData.set(name, value);
      } else {
        copyData.append(name, value);
      }
      return copyData;
    });
  };

  const handleInputChange = (e) => {
    if (e.target.name === "tel") return telephoneValidator(stateUpdater, e);
    if (e.target.name === "zipCode") return telephoneValidator(stateUpdater, e);
    let name = e.target.name;
    let value = e.target.type === "file" ? e.target.files : e.target.value;
    if (name === "state" && value.startsWith("--") && value.endsWith("--"))
      return stateUpdater(name, "");
    stateUpdater(name, value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (!allFieldsPresent(requiredFields, jobData)) {
      return toast.error("Please fill all field", { toadId: customId });
    }
    if (!emailValidator(jobData.get("email"))) {
      return toast.error("Please provide a valid email...", {
        toastId: customId,
      });
    }
    if (jobData.get("tel").length < 13) {
      return toast.error("Please provide a valid telephone.", {
        toastId: customId,
      });
    }
    setDisableAll(true);
    const formData = new FormData(jobForm.current);
    formData.append("heading", "New email for Mimidas Tire & Auto");
    formData.append("template", "job");
    submitEmail(
      formData,
      () => {
        setDisableAll(false);
      },
      () => {
        for (let key of jobData.keys()) {
          console.log(key);
          stateUpdater(key, "");
        }
      }
    );
  };
  return (
    <JobPageContainer>
      <RedBackgroundHeading>Join our team</RedBackgroundHeading>
      <Container style={{ margin: "2rem auto" }}>
        <Para>
          Mimidas Tire & Auto is always looking for top talent to join our team.
          If you are a quality conscious worker committed to producing the kind
          of results our customers have come to expect over the years, we want
          to talk to you! We offer a great work environment committed to quality
          and reward our team members accordingly. Continuing education
          opportunities and ongoing training are just a few of the advantages we
          offer. Contact us today to learn more about job opportunities at Mimidas
          Tire & Auto!
        </Para>
        <SectionPara style={{ textAlign: "left" }}>
          Current Openings
        </SectionPara>
        {loading && <NormalPara>Loading current openings</NormalPara>}
        {currentStoreLocation && !loading && !careers.length && (
          <NormalPara>No opening available</NormalPara>
        )}
        {currentStoreLocation ? (
          !loading &&
          careers.length > 0 && (
            <CareerCardContainer
              style={{ padding: "1rem", background: "#f1f1f1" }}
            >
              {careers.map((car) => (
                <CareerCard {...car} hideActions={true} />
              ))}
            </CareerCardContainer>
          )
        ) : (
          <NormalPara>Pick a store location to available openings</NormalPara>
        )}
        <Heading>Fields marked with an asterisk * are required.</Heading>
        <RedBackgroundHeading>
          Please fill out the information below
        </RedBackgroundHeading>
        <Form ref={jobForm}>
          <GridLayoutContainer>
            <LeftContainer>
              <FormGroupComponent
                label={"First Name*"}
                placeholder={"Enter First Name"}
                name={"firstName"}
                value={jobData.get("firstName")}
                onChange={handleInputChange}
                type={"text"}
              />
              <FormGroupComponent
                label={"Last Name*"}
                placeholder={"Enter Last Name"}
                name={"lastName"}
                value={jobData.get("lastName")}
                onChange={handleInputChange}
                type={"text"}
              />
              <FormGroupComponent
                label={"Email Address*"}
                placeholder={"Enter Email Address"}
                name={"email"}
                value={jobData.get("email")}
                onChange={handleInputChange}
                type={"email"}
              />
              <FormGroupComponent
                label={"Address"}
                placeholder={"Enter Address"}
                name={"address"}
                value={jobData.get("address")}
                onChange={handleInputChange}
                type={"text"}
              />
              <FormGroupComponent
                label={"City"}
                placeholder={"Enter City"}
                name={"city"}
                value={jobData.get("city")}
                onChange={handleInputChange}
                type={"text"}
              />
            </LeftContainer>
            <RightContainer>
              <FormGroupComponent
                label={"State"}
                value={jobData.get("state")}
                onChange={handleInputChange}
                placeholder={"Choose a state"}
                name={"state"}
                type={"select"}
                options={states}
              />
              <FormGroupComponent
                label={"Zip Code"}
                value={jobData.get("zipCode")}
                onChange={handleInputChange}
                placeholder={"Enter Zip Code"}
                name={"zipCode"}
                type={"text"}
                maxLength={8}
              />
              <FormGroupComponent
                label={"Telephone"}
                placeholder={"Enter tel"}
                name={"tel"}
                value={formatTelephone(jobData.get("tel"))}
                onChange={handleInputChange}
                type={"text"}
                maxLength={13}
              />
              <FormGroupComponent
                label={"Position Applying for"}
                placeholder={"Enter position"}
                name={"positionApplyingFor"}
                value={jobData.get("positionApplyingFor")}
                onChange={handleInputChange}
                type={"text"}
              />
              <FormGroupComponent
                label={"Attach Your Resume"}
                placeholder={"Attach Resume"}
                name={"resume"}
                value={jobData?.resume}
                onChange={handleInputChange}
                type={"file"}
                accept={FILE_FORMATS}
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
        </Form>
      </Container>
    </JobPageContainer>
  );
};

const JobPageContainer = styled.div``;

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
`;
export default Jobs;
