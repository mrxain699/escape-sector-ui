import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../api/Auth";
const Layout = ({ children }) => {
  const { getLoggedInUser, loggedInUser } = useContext(AuthContext);
  useEffect(() => {
    const getUser = async () => {
      await getLoggedInUser();
    };
    getUser();
  }, []);
  return (
    loggedInUser.hasOwnProperty("username") && (
      <Container fluid={true} className="layout_container p-0">
        {children}
      </Container>
    )
  );
};

export default Layout;
