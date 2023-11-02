import React from "react";
import Nav from "../components/Layout/Nav";
import Sectors from "../components/Layout/Sectors";
import Layout from "../components/Layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Nav />
      <Sectors />
    </Layout>
  );
};

export default Dashboard;
