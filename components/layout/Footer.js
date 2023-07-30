import {Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import classes from "./Footer.module.scss";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faLinkedin, faTwitterSquare, faXingSquare} from "@fortawesome/free-brands-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Image src="landscape.png" fluid alt="landscape"/>
            <Container>
                <Row className="pt-5 pb-5">
                    <Col lg={4} className={classes.logo}>
                        <Image src="/logo_transparent_white.png" alt="Web at Speed"/>
                        <br/>
                        <br/>
                        &copy; 2013-{new Date().getFullYear()} Web at Speed. All rights reserved.
                    </Col>
                    <Col lg={4}>
                        <h4>Follow Us</h4>
                        <ListGroup horizontal className={classes.icons}>
                            <ListGroup.Item as="li">
                                <a href="https://xing.to/webatspeed">
                                    <FontAwesomeIcon icon={faXingSquare}/>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <a href="https://linkedin.com/in/torstenkrohn">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <a href="https://www.facebook.com/webatspeed/">
                                    <FontAwesomeIcon icon={faFacebookSquare}/>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <a href="https://twitter.com/webatspeed">
                                    <FontAwesomeIcon icon={faTwitterSquare}/>
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={4} className={classes.contact}>
                        <h4>Contact Us</h4>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">Web at Speed GmbH<br/>Rosenfelder Ring 13, 10315
                                Berlin</ListGroup.Item>
                            <ListGroup.Item as="li">torsten.krohn (at) webatspeed.com</ListGroup.Item>
                            <ListGroup.Item as="li">+49 30 91524052</ListGroup.Item>
                        </ListGroup>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <Link href="/imprint">Impressum / Imprint</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Link href="/privacy">Datenschutz / Privacy</Link>
                            </ListGroup.Item>
                        </ListGroup>
                        <Link href="#top" role={"button"} className={classes.up}>
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
