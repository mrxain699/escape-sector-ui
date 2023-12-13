import Navs from "../components/Layout/Nav";
import Sectors from "../components/Layout/Sectors";
import Layout from "../components/Layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Navs />
      <Sectors type="Official" official={true} />
    </Layout>
  );
};

export default Dashboard;
