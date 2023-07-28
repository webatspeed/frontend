import {Col, Container, Image, Row} from "react-bootstrap";

const Recruiters = () => {
    return (
        <Container>
            <Row id="recruiters" className="mt-3 mb-2">
                <Col lg={4} className="text-center">
                    <Image src="/cv.svg" alt="cv" className="mb-3"/>
                </Col>
                <Col lg={8}>
                    <h2>Dear Recruiters,</h2>
                    <p>
                        if your business is searching for IT experts, sign up for the CV newsletter.
                        You&apos;ll never miss skill updates or new availability dates due to the emails we send
                        no more than three times a year.
                    </p>
                    <form className="row g-2">
                        <div className="col-8">
                            <label htmlFor="email" className="visually-hidden-focusable">
                                Email address
                            </label>
                            <input type="email" className="form-control" id="email" disabled="disabled"
                                   aria-describedby="emailHelp" placeholder="Email" tabIndex="1"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" tabIndex="2" disabled="disables">
                                Sign up
                            </button>
                        </div>
                        <div className="col-12 form-text">
                            We&apos;ll never share your email with anyone else. Sign off anytime.
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Recruiters;
