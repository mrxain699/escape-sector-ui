import React from "react";
import Layout from "../components/Layout/Layout";
import Nav from "../components/Layout/Nav";
import AddSectorForm from "../components/Layout/AddSector";

const AddSector = () => {
  return (
    <Layout>
      <Nav />
      <AddSectorForm />
    </Layout>
  );
};

export default AddSector;
