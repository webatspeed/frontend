import { Container } from "react-bootstrap";
import Development from "../components/divisions/Development";
import Startup from "../components/divisions/Startup";
import { Fragment } from "react";
import Fullstack from "../components/divisions/Fullstack";
import Devices from "../components/divisions/Devices";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Development />
      </Container>
      <Container fluid className="darker skew">
        <Startup />
      </Container>
      <Container>
        <Fullstack />
      </Container>
      <Container fluid className="painted skew">
        <Devices />
      </Container>
    </Fragment>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Home;
