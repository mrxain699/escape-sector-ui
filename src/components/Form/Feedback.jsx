import { Form } from "react-bootstrap";

const Feedback = ({ type, text }) => {
  return (
    <Form.Control.Feedback type={type} className="field_error">
      {text}
    </Form.Control.Feedback>
  );
};

export default Feedback;
