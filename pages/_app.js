import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
