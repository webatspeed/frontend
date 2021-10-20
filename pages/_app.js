import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default MyApp;
