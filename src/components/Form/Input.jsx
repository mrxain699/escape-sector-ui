import { Form } from "react-bootstrap";

const Input = ({
  type,
  name,
  placeholder,
  id,
  required,
  value,
  handleChange,
}) => {
  return (
    <Form.Control
      type={type}
      name={name}
      placeholder={placeholder}
      as={"input"}
      id={id}
      required={required ? required : true}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
