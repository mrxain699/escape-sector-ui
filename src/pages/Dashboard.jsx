import React from "react";
import CustomNavbar from "../components/Layout/Navbar";
import CustomCard from "../components/Layout/Card";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <Layout>
      <CustomNavbar />
      <CustomCard />
    </Layout>
  );
};

export default Dashboard;
