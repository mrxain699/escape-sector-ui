import React, { useContext } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { AuthContext } from "../../api/Auth";
import { useNavigate, NavLink } from "react-router-dom";

const Nav = () => {
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
        <Navbar.Brand href="/dashboard">Escape Sector</Navbar.Brand>
        <a href="/community-sector" className="nav-link">
          Community Sector
        </a>
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

export default Nav;
