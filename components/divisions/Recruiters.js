import {Alert, Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {useSearchParams} from 'next/navigation'

const Recruiters = (props) => {
    const emailInputRef = useRef();
    const searchParams = useSearchParams();
    const [showMessage, setMessage] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();
        await props.onSendEmail(enteredDetails()) ?
            setMessage('created') :
            setMessage('createError');
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
        return showMessage === '';
    }

    const enteredDetails = () => {
        return {
            email: emailInputRef.current.value
        }
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
            token: searchParams.get("uToken"),
            approve: true
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
                    await props.onVerifyEmail(confirmDetails()) ?
                        setMessage('confirmed') :
                        setMessage('updateError');
                } else if (approving()) {
                    await props.onVerifyEmail(approveDetails()) ?
                        setMessage('approved') :
                        setMessage('updateError');
                } else if (deleting()) {
                    await props.onDeleteEmail(deleteDetails()) ?
                        setMessage('deleted') :
                        setMessage('updateError');
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
                            <Form.Control type="email" id="email" ref={emailInputRef}
                                          disabled={showMessage !== ''}
                                          aria-describedby="emailHelp" placeholder="Your Email" tabIndex="1"/>
                        </Form.Group>
                        <Form.Group className="col-auto">
                            <Button type="submit" tabIndex="2" disabled={showMessage !== ''}>
                                Sign up
                            </Button>
                        </Form.Group>
                        <Form.Text className="col-12">
                            We&apos;ll never share your email with anyone else. Sign off anytime.
                        </Form.Text>
                        <Alert className="alert-success" show={showMessage === 'created'}>
                            Success! Please check your emails to confirm this request.
                        </Alert>
                        <Alert className="alert-success" show={showMessage === 'confirmed'}>
                            Success! Please wait now as we&apos;ll need some minutes to approve your subscription.
                        </Alert>
                        <Alert className="alert-success" show={showMessage === 'approved'}>
                            Success! The subscriber has been approved.
                        </Alert>
                        <Alert className="alert-success" show={showMessage === 'deleted'}>
                            We&apos;re sad to see you go. You have successfully unsubscribed from receiving emails.
                        </Alert>
                        <Alert className="alert-danger" show={showMessage === 'createError'}>
                            Error! Something went wrong. Did you sign up already?
                        </Alert>
                        <Alert className="alert-danger" show={showMessage === 'updateError'}>
                            Error! Something went wrong.
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Recruiters;
