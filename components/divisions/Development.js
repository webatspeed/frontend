import {Col, Image, Row} from "react-bootstrap";
import classes from "./Development.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {faJava, faLaravel, faPhp, faReact, faSymfony} from "@fortawesome/free-brands-svg-icons";

const Development = () => {
    return (
        <>
            <Row id="dev" className="mt-3 mt-md-5 mb-3 mb-lg-5">
                <Col lg={6} className="pe-0 pe-md-5">
                    <h2>Software Development for&nbsp;Hire</h2>
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
        </>
    );
};

export default Development;
