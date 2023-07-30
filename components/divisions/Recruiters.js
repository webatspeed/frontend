import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";

const Recruiters = () => {
    return (
        <Container>
            <Row id="recruiters" className="mt-3 mb-2">
                <Col lg={4} className="text-center">
                    <Image src="/cv.svg" alt="cv" className="mb-3 shadow-lg"/>
                </Col>
                <Col lg={8}>
                    <h2 className="inverted">Dear Recruiters,</h2>
                    <p>
                        if your business is searching for IT experts, sign up for the CV newsletter.
                        You&apos;ll never miss skill updates or new availability dates due to the emails we send
                        no more than three times a year.
                    </p>
                    <Form className="row g-2">
                        <Form.Group className="col-8">
                            <Form.Label htmlFor="email" className="visually-hidden-focusable">
                                Email address
                            </Form.Label>
                            <Form.Control type="email" id="email" disabled="disabled"
                                          aria-describedby="emailHelp" placeholder="Email" tabIndex="1"/>
                        </Form.Group>
                        <Form.Group className="col-auto">
                            <Button type="submit" tabIndex="2" disabled="disables">
                                Sign up
                            </Button>
                        </Form.Group>
                        <Form.Text className="col-12">
                            We&apos;ll never share your email with anyone else. Sign off anytime.
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Recruiters;
