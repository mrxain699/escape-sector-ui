import React, { useContext } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import Auth, { AuthContext } from "../../api/Auth";
import { useNavigate } from "react-router-dom";
const CustomNavbar = () => {
  const { logout, loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <Navbar expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">Escape Sector</Navbar.Brand>
        <Navbar.Text className="ms-auto me-3">
          Welcome, {loggedInUser.username}
        </Navbar.Text>
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
