import React from "react";
import Layout from "../components/Layout/Layout";
import Navs from "../components/Layout/Nav";
import Task from "../components/Layout/Tasks";
import { useParams } from "react-router-dom";
const Tasks = () => {
  const { sectorId } = useParams();
  return (
    <Layout>
      <Navs />
      <Task id={sectorId} />
    </Layout>
  );
};

export default Tasks;
