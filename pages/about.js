import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <div className="bg-white">
      <h3>About The Project</h3>
      <p className="text-left">
        This is a Next.js project, created to explore the server-side
        capabilities of the React framework. So far using the project, I have
        discovered some more useful ways of interacting with react. The ability
        to override the custom way it renders HTML documents allow for the
        interaction with the normal HTML elements we're used to seeing.
      </p>
      <p className="text-left">
        <b>
          In this project, I have built a simple TODO list using the framework
        </b>
      </p>
      <h4 className="text-left">Some other features of Next.js</h4>
      <ul className="text-left">
        <li>Server-side Rendering</li>
        <li>SEO Ready</li>
        <li>Easily Deployed Anywhere</li>
        <li>Zero Configuration</li>
        <li>Scalable</li>
        <li>Simple Page Based Routing</li>
      </ul>
    </div>
  </Layout>
);

export default About;
