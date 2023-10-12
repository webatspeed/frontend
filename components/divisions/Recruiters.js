import {Alert, Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {useSearchParams} from 'next/navigation'

const Recruiters = (props) => {
    const emailInputRef = useRef();
    const searchParams = useSearchParams();

    const [showCreated, setShowCreated] = useState(false);
    const [showConfirmed, setShowConfirmed] = useState(false);
    const [showApproved, setShowApproved] = useState(false);
    const [showDeleted, setShowDeleted] = useState(false);

    const [showCreateError, setShowCreateError] = useState(false);
    const [showUpdateError, setShowUpdateError] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredDetails = {
            email: emailInputRef.current.value
        };
        const created = await props.onSendEmail(enteredDetails);

        if (created === true) {
            setShowCreated(true);
        } else {
            setShowCreateError(true);
        }
    }

    const emailLinkClicked = () => {
        return window.location.href.toLowerCase().endsWith("#recruiters")
            && (confirming() || approving() || deleting());
    }

    const confirming = () => {
        return inProgress("");
    }

    const approving = () => {
        return inProgress("u");
    }

    const deleting = () => {
        return inProgress("d");
    }

    const inProgress = (prefix) => {
        const tokenProto = prefix + "Token";
        const tokenName = tokenProto.charAt(0).toLowerCase() + tokenProto.slice(1);
        return searchParams.get("username") !== null && searchParams.get(tokenName) !== null;
    }

    const noMessageShowing = () => {
        return showCreated === false
            && showConfirmed === false
            && showApproved === false
            && showDeleted === false
            && showCreateError === false
            && showUpdateError === false;
    }

    const confirmDetails = () => {
        return {
            email: searchParams.get("username"),
            token: searchParams.get("token")
        }
    }

    const approveDetails = () => {
        return {
            email: searchParams.get("username"),
            token: searchParams.get("uToken")
        }
    }

    const deleteDetails = () => {
        return {
            email: searchParams.get("username"),
            token: searchParams.get("dToken")
        }
    }

    useEffect(() => {
        async function changeSubscription() {
            if (emailLinkClicked() && noMessageShowing()) {
                if (confirming()) {
                    if (await props.onVerifyEmail(confirmDetails()) === true) {
                        setShowConfirmed(true);
                    } else {
                        setShowUpdateError(true);
                    }
                } else if (approving()) {
                    if (await props.onVerifyEmail(approveDetails()) === true) {
                        setShowApproved(true);
                    } else {
                        setShowUpdateError(true);
                    }
                } else if (deleting()) {
                    if (await props.onDeleteEmail(deleteDetails()) === true) {
                        setShowDeleted(true);
                    } else {
                        setShowUpdateError(true);
                    }
                }
            }
        }

        changeSubscription();
    });

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
                            <Form.Control type="email" id="email" ref={emailInputRef} disabled={showCreated}
                                          aria-describedby="emailHelp" placeholder="Your Email" tabIndex="1"/>
                        </Form.Group>
                        <Form.Group className="col-auto">
                            <Button type="submit" tabIndex="2" disabled={showCreated}>
                                Sign up
                            </Button>
                        </Form.Group>
                        <Form.Text className="col-12">
                            We&apos;ll never share your email with anyone else. Sign off anytime.
                        </Form.Text>
                        <Alert className="alert-success" show={showCreated}>
                            Success! Please check your emails to confirm this request.
                        </Alert>
                        <Alert className="alert-success" show={showConfirmed}>
                            Success! Please wait now as we&apos;ll need some minutes to approve your subscription.
                        </Alert>
                        <Alert className="alert-success" show={showApproved}>
                            Success! The subscriber has been approved.
                        </Alert>
                        <Alert className="alert-success" show={showDeleted}>
                            We&apos;re sad to see you go. You have successfully unsubscribed from receiving emails.
                        </Alert>
                        <Alert className="alert-danger" show={showCreateError}>
                            Error! Something went wrong. Did you sign up already?
                        </Alert>
                        <Alert className="alert-danger" show={showUpdateError}>
                            Error! Something went wrong.
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Recruiters;
