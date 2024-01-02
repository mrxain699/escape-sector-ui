import React from "react";
import Layout from "../components/Layout/Layout";
import Navs from "../components/Layout/Nav";
import AddSectorForm from "../components/Layout/AddSector";
import { useParams } from "react-router-dom";
const AddSector = () => {
  const { type } = useParams();
  return (
    <Layout>
      <Navs />
      <AddSectorForm official={type === "official" ? true : false} />
    </Layout>
  );
};

export default AddSector;
