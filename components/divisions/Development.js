import {Col, Image, Row} from "react-bootstrap";
import classes from "./Development.module.scss";
import {SiAngular, SiElasticsearch, SiSpringboot, SiTerraform} from "react-icons/si";
import {FaAws} from "react-icons/fa";
import {RiJavaLine} from "react-icons/ri";
import {useId} from "react";

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
                    <RiJavaLine
                        size="1.8em"
                        className="flex-fill"
                        title="Java"
                        titleid={useId()}
                    />
                    <SiSpringboot
                        size="1.8em"
                        className="flex-fill"
                        title="Spring Boot"
                        titleid={useId()}
                    />
                    <FaAws
                        size="1.8em"
                        className="flex-fill"
                        title="AWS"
                        titleid={useId()}
                    />
                    <SiAngular
                        size="1.8em"
                        className="flex-fill"
                        title="Angular"
                        titleid={useId()}
                    />
                    <SiTerraform
                        size="1.8em"
                        className="flex-fill"
                        title="Terraform"
                        titleid={useId()}
                    />
                    <SiElasticsearch
                        size="1.8em"
                        className="flex-fill"
                        title="Elasticsearch"
                        titleid={useId()}
                    />
                </Col>
            </Row>
            <Row className={`mb-5 mt-2 text-center ${classes["tech-names"]}`}>
                <Col className="col-4 col-lg">Java</Col>
                <Col className="col-4 col-lg">Spring&nbsp;Boot</Col>
                <Col className="col-4 col-lg">AWS</Col>
                <Col className="col-4 col-lg">Angular</Col>
                <Col className="col-4 col-lg">Terraform</Col>
                <Col className="col-4 col-lg">Elastic</Col>
                <Col className="col-4 col-lg">and&nbsp;more...</Col>
            </Row>
        </>
    );
};

export default Development;
