import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import Nav from "../components/Layout/Nav";
import EditTaskForm from "../components/Layout/EditTask";
import { SectorContext } from "../api/Sector";
import { useParams, useNavigate } from "react-router-dom";
const EditTask = () => {
  const { getSectorTaskById, task } = useContext(SectorContext);
  const { sectorId, taskId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getSectorTaskById(sectorId, taskId);
  }, []);

  return (
    <Layout>
      <Nav />
      {task && task._id === taskId && (
        <EditTaskForm task={task} sector_id={sectorId} navigate={navigate} />
      )}
    </Layout>
  );
};

export default EditTask;
