import Layout from "../components/Layout";
import "../scss/style.scss";

const Index = () => (
  <Layout>
    <div className="center">
      <h1>My Todo App</h1>
      <h3 id="clock" />
      <h3>Welcome To My Next.js Todo App</h3>
      <h6>
        <small>--Created By Adekunle Ibrahim</small>
      </h6>
    </div>
  </Layout>
);

export default Index;
