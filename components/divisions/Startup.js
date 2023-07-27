import {Col, Container, Image, Row} from "react-bootstrap";

const Startup = () => {
    return (
        <Container>
            <Row id="startup">
                <Col lg={7}>
                    <Image src="/car.svg" alt="car" className="w-100"/>
                </Col>
                <Col lg={5}>
                    <h2>Initiate Your Startup&apos;s Technology</h2>
                    <p>
                        Berlin has a vibrant startup community. Owing to their potential for
                        growth, large companies are often on the lookout to benefit from
                        startups. We have experience handling projects, whatever the size of
                        the company, to ensure a dynamic internet environment.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Startup;
