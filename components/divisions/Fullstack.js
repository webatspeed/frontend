import { Col, Image, Row } from "react-bootstrap";
import { Fragment } from "react";

const Fullstack = () => {
  return (
    <Fragment>
      <Row id="fullstack" className="mt-5 justify-content-between">
        <Col lg={5}>
          <h2>Full Stack</h2>
          <p>
            Developers are frequently asked this common question, &quot;Do you
            do front-end or back-end?&quot; Our answer is, “Both!” In the
            back-end you find the complexity of the application while the
            front-end is the interface to the user. The whole system exists to
            assist and to extend user-friendliness. That&apos;s why no aspect
            can be neglected.
          </p>
        </Col>
        <Col lg={6}>
          <Image src="/birds.svg" alt="birds" className="w-100 fa-pull-right" />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Fullstack;
