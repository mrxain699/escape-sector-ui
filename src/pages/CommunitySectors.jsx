import React from "react";
import Nav from "../components/Layout/Nav";
import Sectors from "../components/Layout/Sectors";
import Layout from "../components/Layout/Layout";

const CommunitySectors = () => {
  return (
    <Layout>
      <Nav />
      <Sectors type="Community" official={false} />
    </Layout>
  );
};

export default CommunitySectors;
