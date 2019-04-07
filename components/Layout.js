import Navbar from "./Navbar/Navbar";
import Head from "next/head";
// import "../style.css";

const Layout = props => (
  <div>
    <Head>
      <title>Todo App | Hybee</title>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
