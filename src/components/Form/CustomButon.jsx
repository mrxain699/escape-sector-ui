import { Button } from "react-bootstrap";

const CustomButton = ({ type, text }) => {
  return (
    <Button type={type} as="button">
      {text}
    </Button>
  );
};

export default CustomButton;
