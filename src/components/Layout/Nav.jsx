import React, { useContext } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { AuthContext } from "../../api/Auth";
import { NavLink } from "react-router-dom";

const Navs = () => {
  const { logout, loggedInUser } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar expand="lg">
      <Container className="navbar-container">
        <a href="/dashboard" className="navbar-brand">
          Escape Sector
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="pb-sm-2 pb-lg-0 pb-md-0 "
          style={{ zIndex: 999, backgroundColor: "#fff" }}
        >
          <Nav className="w-100">
            <a href="/community-sector" className="nav-link">
              Community Sector
            </a>
            <Navbar.Text className="ms-auto me-3">
              Welcome, {loggedInUser.username}
            </Navbar.Text>
            <Button type="button" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
