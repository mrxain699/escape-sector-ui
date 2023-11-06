import React from "react";
import Layout from "../components/Layout/Layout";
import Nav from "../components/Layout/Nav";
import AddTask from "../components/Layout/AddTask";
import { useParams } from "react-router-dom";
const AddSectorTask = () => {
  const { sectorId } = useParams();
  return (
    <Layout>
      <Nav />
      <AddTask sector_id={sectorId} />
    </Layout>
  );
};

export default AddSectorTask;
