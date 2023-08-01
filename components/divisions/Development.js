import {Col, Image, Row} from "react-bootstrap";
import classes from "./Development.module.scss";
import {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {faJava, faPhp} from "@fortawesome/free-brands-svg-icons";
import {faLaravel} from "@fortawesome/free-brands-svg-icons/faLaravel";
import {faSymfony} from "@fortawesome/free-brands-svg-icons/faSymfony";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";

const Development = () => {
    return (
        <Fragment>
            <Row id="dev" className={`mt-3 mt-md-5 ${classes["my-lg-10"]}`}>
                <Col lg={6} className="pe-0 pe-md-5">
                    <h2>Software Development for Hire</h2>
                    <p>
                        When it comes to web projects, saving time is often a key factor. We
                        provide software development in the web field ranging from simple
                        support through to overall project management.
                    </p>
                </Col>
                <Col lg={6} className="d-none d-md-block mb-md-5 mb-lg-0">
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
                <Col lg={8} className="list-group list-group-horizontal align-items-center">
                    <FontAwesomeIcon
                        icon={faJava}
                        size="3x"
                        className="flex-fill"
                        title="Java"
                        transform="shrink-4"
                    />
                    <FontAwesomeIcon
                        icon={faLeaf}
                        size="2x"
                        className="flex-fill"
                        title="Spring Boot"
                        transform="shrink-4"
                    />
                    <FontAwesomeIcon
                        icon={faPhp}
                        size="3x"
                        className="flex-fill"
                        title="PHP"
                        transform="shrink-4"
                    />
                    <FontAwesomeIcon
                        icon={faLaravel}
                        size="3x"
                        className="flex-fill"
                        title="Laravel"
                        transform="shrink-4"
                    />
                    <FontAwesomeIcon
                        icon={faReact}
                        size="3x"
                        className="flex-fill"
                        title="React.js"
                        transform="shrink-4"
                    />
                    <FontAwesomeIcon
                        icon={faSymfony}
                        size="3x"
                        className="flex-fill"
                        title="Symfony"
                        transform="shrink-4"
                    />
                </Col>
            </Row>
            <Row className={`mb-5 mt-2 text-center ${classes["tech-names"]}`}>
                <Col className="col-4 col-lg">Java</Col>
                <Col className="col-4 col-lg">Spring&nbsp;Boot</Col>
                <Col className="col-4 col-lg">PHP</Col>
                <Col className="col-4 col-lg">Laravel</Col>
                <Col className="col-4 col-lg">React.js</Col>
                <Col className="col-4 col-lg">Symfony</Col>
                <Col className="col-4 col-lg">and&nbsp;more...</Col>
            </Row>
        </Fragment>
    );
};

export default Development;
