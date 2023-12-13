import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import Navs from "../components/Layout/Nav";
import EditQuestForm from "../components/Layout/EditQuest";
import { SectorContext } from "../api/Sector";
import { useParams, useNavigate } from "react-router-dom";
const EditQuest = () => {
  const { getSectorQuestById, quest } = useContext(SectorContext);
  const { sectorId, questId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getSectorQuestById(questId);
    console.log(quest);
  }, []);

  return (
    <Layout>
      <Navs />
      {quest && (
        <EditQuestForm quest={quest} sector_id={sectorId} navigate={navigate} />
      )}
    </Layout>
  );
};

export default EditQuest;
