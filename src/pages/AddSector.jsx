import React from "react";
import Layout from "./Layout";
import CustomNavbar from "../components/Layout/Navbar";
import AddSectorForm from "../components/Layout/AddSectorForm";
const AddSector = () => {
  return (
    <Layout>
      <CustomNavbar />
      <AddSectorForm />
    </Layout>
  );
};

export default AddSector;
