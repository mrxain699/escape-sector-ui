import Layout from "../components/Layout/Layout";
import Navs from "../components/Layout/Nav";
import Quest from "../components/Layout/Quests";
import { useParams } from "react-router-dom";
const Quests = () => {
  const { sectorId } = useParams();
  return (
    <Layout>
      <Navs />
      <Quest id={sectorId} />
    </Layout>
  );
};

export default Quests;
