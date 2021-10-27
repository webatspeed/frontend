import { Container } from "react-bootstrap";
import Development from "../components/divisions/Development";
import Startup from "../components/divisions/Startup";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Development />
      </Container>
      <Container fluid className="darker skew">
        <Startup />
      </Container>
    </Fragment>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Home;
