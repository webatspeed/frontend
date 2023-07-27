import {Card, Col, NavLink, Row} from "react-bootstrap";
import classes from "./Customers.module.scss";

const Customers = () => {
    return (
        <Row id="customers" className="mt-5">
            <Col className="text-center">
                <h2 className="mb-4">Customers&apos; Opinion</h2>
                <Row xs={1} md={3} className={`g-5 ${classes.cards}`}>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/malte-barth.jpg"
                                alt="Malte Barth"
                            />
                            <Card.Body>
                                <Card.Title as="h4">Malte Barth</Card.Title>
                                <h6>
                                    Founding General Partner at
                                    <NavLink href="https://www.bitkraft.vc/">
                                        BITKRAFT Esports Ventures
                                    </NavLink>
                                </h6>
                                <Card.Text>
                                    Torsten is an allrounder in terms of both front-end and
                                    back-end. His analytical skills, even when it comes to highly
                                    complex features, are terrific and a great benefit for all IT
                                    ventures.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/vida-brychcy.jpg"
                                alt="Vida Brychcy"
                            />
                            <Card.Body>
                                <Card.Title as="h4">Vida Brychcy</Card.Title>
                                <h6>
                                    Director Product & Engineering at
                                    <NavLink href="https://www.chip.de/">CHIP Digital GmbH</NavLink>
                                </h6>
                                <Card.Text>
                                    His good knowledge and a fast adaptation helped us to take a
                                    big step forward in the development of our systems.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/lars-fink.jpg"
                                alt="Dr. Lars Fink"
                            />
                            <Card.Body>
                                <Card.Title as="h4">Dr. Lars Fink</Card.Title>
                                <h6>
                                    Managing Director at
                                    <NavLink href="https://www.iesy.de/">iesy GmbH</NavLink>
                                </h6>
                                <Card.Text>
                                    We have successfully worked together with Torsten for the last
                                    years. In different projects he took roles as requirements
                                    engineer, software architect or senior developer. He was
                                    always very reliable, fast and produced excellent results.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/dennis-kaemker.jpg"
                                alt="Dennis Kämker"
                            />
                            <Card.Body>
                                <Card.Title as="h4">Dennis Kämker</Card.Title>
                                <h6>
                                    Head of Corporate Services at
                                    <NavLink href="https://www.wdp.de/">
                                        Wachter Digital Partners
                                    </NavLink>
                                    and
                                    <NavLink href="https://intargia.com/">
                                        Intargia Managementberatung GmbH
                                    </NavLink>
                                </h6>
                                <Card.Text>
                                    Meeting the delivery date and the budget we completely rely on
                                    Torsten.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/andreas-durth.jpg"
                                alt="Andreas Durth"
                            />
                            <Card.Body>
                                <Card.Title as="h4">Andreas Durth</Card.Title>
                                <h6>
                                    Chief Marketing Officer at
                                    <NavLink href="https://www.studienkreis.de/">
                                        Studienkreis GmbH
                                    </NavLink>
                                </h6>
                                <Card.Text>
                                    Finally a developer who means &apos;done&apos; when he says
                                    &quot;it&apos;s done&quot;: not only did it look
                                    &apos;done&apos;, it also worked 100% bug-free. And all that
                                    after being extraordinary fast - I can enthusiastically
                                    recommend Torsten.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Customers;
