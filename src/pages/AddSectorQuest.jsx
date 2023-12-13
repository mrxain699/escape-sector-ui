import Layout from "../components/Layout/Layout";
import Navs from "../components/Layout/Nav";
import AddQuest from "../components/Layout/AddQuest";
import { useParams } from "react-router-dom";
const AddSectorTask = () => {
  const { sectorId } = useParams();
  return (
    <Layout>
      <Navs />
      <AddQuest sector_id={sectorId} />
    </Layout>
  );
};

export default AddSectorTask;
