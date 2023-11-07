import React from "react";
import Layout from "../components/Layout/Layout";
import Navs from "../components/Layout/Nav";
import AddSectorForm from "../components/Layout/AddSector";
import { useParams } from "react-router-dom";
const AddSector = () => {
  const { official } = useParams();
  return (
    <Layout>
      <Navs />
      <AddSectorForm official={official} />
    </Layout>
  );
};

export default AddSector;
