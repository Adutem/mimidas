import styled from "styled-components";
import hoursOfOperation from "../../data/hours-of-operation";
import { useRef } from "react";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Form } from "react-router-dom";

export const FormGroupComponent = ({
  type,
  name,
  placeholder,
  label,
  onChange,
  value,
  options,
  shouldResize,
  generalName,
  keyValueSelect,
  ...rest
}) => {
  if (type === "textarea") {
    return (
      <FormGroup {...rest}>
        <Label>{label}</Label>
        <TextArea
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          style={{ resize: shouldResize || "none" }}
        />
      </FormGroup>
    );
  }
  if (type === "select") {
    return (
      <FormGroup {...rest}>
        <Label>{label}</Label>
        <Select
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        >
          {keyValueSelect
            ? options?.map((option) => (
                <Option value={option.value}>{option.ph}</Option>
              ))
            : options?.map((option) => (
                <Option value={option}>{option}</Option>
              ))}
        </Select>
      </FormGroup>
    );
  }
  if (type === "date-time") {
    return (
      <FormGroup {...rest}>
        <Label>{label}</Label>
        <DateTimePicker
          onChange={(value) =>
            onChange({
              target: { name, value },
            })
          }
          value={value}
        />
      </FormGroup>
    );
  }
  if (type === "radio") {
    return (
      <FormGroup {...rest}>
        <Label style={{ flexBasis: "100%", marginBottom: "1rem" }}>
          {generalName}
        </Label>
        {options?.map((option) => (
          <FormGroup
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: "0",
            }}
          >
            <Input
              type={type}
              name={name}
              checked={value === option.value}
              value={option.value}
              id={option.value}
              style={{ width: "initial" }}
              onChange={onChange}
            />{" "}
            <Label htmlFor={option.value}>{option.label}</Label>
          </FormGroup>
        ))}
      </FormGroup>
    );
  }
  return (
    <FormGroup {...rest}>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  );
};

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-family: var(--mont);
  display: block;
  font-weight: 600;
  cursor: pointer;
`;

const Input = styled.input`
  font-family: var(--mont);
  border: none;
  outline: none;
  background: lightgray;
  padding: 1rem;
  width: 100%;
  display: block;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  font-family: var(--mont);
  border: none;
  outline: none;
  background: lightgray;
  padding: 1rem;
  width: 100%;
  display: block;
  resize: none;
  min-height: 250px;
  cursor: pointer;
`;

const Select = styled.select`
  font-family: var(--mont);
  border: none;
  outline: none;
  background: lightgray;
  padding: 1rem;
  width: 100%;
  display: block;
  cursor: pointer;
`;

const Option = styled.option`
  cursor: pointer;
`;

// let today = new Date().getDay();
const dates = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// let dayOfWeek = dates[today].toLowerCase();

export const DaysOfOperationComponent = () => {
  let today = useRef(new Date().getDay()).current;
  let dayOfWeek = useRef(dates[today].toLowerCase()).current;

  return (
    <HoursOfOperationContainer>
      {hoursOfOperation.map(({ date, hours }) => (
        <HoursOfOperaton isToday={dayOfWeek === date.toLowerCase()}>
          <Dates>{date}</Dates>
          {hours.map((hour) => (
            <Hour>{hour}</Hour>
          ))}
        </HoursOfOperaton>
      ))}
    </HoursOfOperationContainer>
  );
};

const HoursOfOperationContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: 90%;
  margin: 2rem auto;
  border: 1px solid lightgray;
`;

const HoursOfOperaton = styled.li`
  border: 1px solid lightgray;
  text-align: center;
  padding: 1rem;
  min-width: max-content;
  background: ${(props) =>
    props.isToday ? "var(--primary-color)" : "transparent"};

  h3 {
    color: ${(props) => (props.isToday ? "var(--white)" : "gray")};
  }

  p {
    color: ${(props) => (props.isToday ? "var(--white)" : "lightgray")};
  }

  //   &:last-child {
  //     border: none;
  //   }
`;

const Dates = styled.h3`
  font-family: var(--mont);
  font-weight: 600;
  text-transform: uppercase;
`;

const Hour = styled.p`
  font-family: var(--mont);
  font-weight: 300;
`;
