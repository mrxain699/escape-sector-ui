import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import Navs from "../components/Layout/Nav";
import EditSectorForm from "../components/Layout/EditSector";
import { SectorContext } from "../api/Sector";
import { useParams, useNavigate } from "react-router-dom";
const EditSector = () => {
  const { getSectorById, sector } = useContext(SectorContext);
  const { sectorId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getSectorById(sectorId);
  }, []);

  return (
    <Layout>
      <Navs />
      {sector && sector._id === sectorId && (
        <EditSectorForm sector={sector} navigate={navigate} />
      )}
    </Layout>
  );
};

export default EditSector;
