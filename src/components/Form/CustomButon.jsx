import { useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import { AuthContext } from "../../api/Auth.jsx";
const CustomButton = ({ type, text }) => {
  const { loader } = useContext(AuthContext);
  return (
    <Button type={type} as="button">
      {loader ? (
        <div className="text-center">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : (
        text
      )}
    </Button>
  );
};

export default CustomButton;
