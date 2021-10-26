import { Col, Image, Row } from "react-bootstrap";
import classes from "./Development.module.scss";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faJava, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons/faLaravel";
import { faSymfony } from "@fortawesome/free-brands-svg-icons/faSymfony";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

const Development = () => {
  return (
    <Fragment>
      <Row id="dev" className={`mt-3 mt-md-5 ${classes["my-lg-10"]}`}>
        <Col lg={6} className="pe-0 pe-md-5">
          <h2 className={classes.heading}>Software Development for Hire</h2>
          <p className={classes.description}>
            When it comes to web projects, saving time is often a key factor. We
            provide software development in the web field ranging from simple
            support through to overall project management.
          </p>
        </Col>
        <Col lg={6} className="d-none d-md-block">
          <Image
            src="/logo_transparent_black.png"
            alt="logo"
            className="w-100"
          />
        </Col>
      </Row>
      <Row className={classes.tech}>
        <Col lg={4}>
          Implementation begins with a thoughtful choice of technology. We
          specialize in...
        </Col>
        <Col
          lg={8}
          className="list-group list-group-horizontal align-items-center"
        >
          <FontAwesomeIcon icon={faJava} size="3x" className="flex-fill" />
          <FontAwesomeIcon icon={faLeaf} size="2x" className="flex-fill" />
          <FontAwesomeIcon icon={faPhp} size="3x" className="flex-fill" />
          <FontAwesomeIcon icon={faLaravel} size="3x" className="flex-fill" />
          <FontAwesomeIcon icon={faSymfony} size="3x" className="flex-fill" />
          <FontAwesomeIcon icon={faReact} size="3x" className="flex-fill" />
        </Col>
      </Row>
      <Row>
        <Col
          lg={12}
          className={`text-center list-group list-group-horizontal align-items-center ${classes["tech-names"]}`}
        >
          <span className="flex-fill">Java</span>
          <span className="flex-fill">Spring Boot</span>
          <span className="flex-fill">PHP</span>
          <span className="flex-fill">Laravel</span>
          <span className="flex-fill">Symfony</span>
          <span className="flex-fill">React</span>
          <span className="flex-fill">and more...</span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Development;
