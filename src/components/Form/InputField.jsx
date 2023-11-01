import React from "react";
import { Form } from "react-bootstrap";
import Feedback from "./Feedback";
const InputField = ({
  htmlFor,
  text,
  type,
  name,
  id,
  placeholder,
  error,
  handleChange,
  value,
}) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={htmlFor} as={"label"}>
        {text}
      </Form.Label>
      <Form.Control
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        required={true}
        as={"input"}
        onChange={handleChange}
      />
      <Feedback type={"invalid"} text={error} />
    </Form.Group>
  );
};

export default InputField;
