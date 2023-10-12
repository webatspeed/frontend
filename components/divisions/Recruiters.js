import {Alert, Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useRef, useState} from "react";

const Recruiters = (props) => {
    const emailInputRef = useRef();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredDetails = {
            email: emailInputRef.current.value
        };
        const created = await props.onSendEmail(enteredDetails);

        if (created === true) {
            setShowSuccess(true);
        } else {
            setShowError(true);
        }
    }

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
                    <Form className="row g-2" onSubmit={submitHandler}>
                        <Form.Group className="col-8">
                            <Form.Label htmlFor="email" className="visually-hidden-focusable">
                                Email address
                            </Form.Label>
                            <Form.Control type="email" id="email" ref={emailInputRef} disabled={showSuccess}
                                          aria-describedby="emailHelp" placeholder="Your Email" tabIndex="1"/>
                        </Form.Group>
                        <Form.Group className="col-auto">
                            <Button type="submit" tabIndex="2" disabled={showSuccess}>
                                Sign up
                            </Button>
                        </Form.Group>
                        <Form.Text className="col-12">
                            We&apos;ll never share your email with anyone else. Sign off anytime.
                        </Form.Text>
                        <Alert className="alert-success" show={showSuccess}>
                            Success! Please check your emails to confirm this request.
                        </Alert>
                        <Alert className="alert-danger" show={showError}>
                            Error! Something went wrong. Did you sign up already?
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Recruiters;
