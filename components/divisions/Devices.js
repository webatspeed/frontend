import {Col, Container, Image, Row} from "react-bootstrap";

const Devices = () => {
    return (
        <Container>
            <Row id="devices">
                <Col lg={12} className="text-center">
                    <Image
                        src="/devices.svg"
                        alt="devices"
                        className="w-75 mx-auto d-block"
                    />
                    <h2 className="mt-5 inverted">Multiple Devices</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={8} className="text-center mt-1">
                    <p>
                        Modern technology has brought us a wide range of devices: desktop
                        computers, smart phones, tablets with varying functions and
                        utilizing different technology, often involving great expense. We
                        provide solutions that can be scaled over various devices saving you
                        time all the while ensuring that the features remain uncompromised.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Devices;
