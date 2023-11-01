import { Form } from "react-bootstrap";

const Label = ({ htmlFor, text }) => {
  return (
    <Form.Label htmlFor={htmlFor} as="label">
      {text}
    </Form.Label>
  );
};

export default Label;
