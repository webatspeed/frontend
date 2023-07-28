import {Col, Row} from "react-bootstrap";
import {Fragment} from "react";

const Content = () => {
    return (
        <Fragment>
            <Row id="content" className="mt-5 justify-content-between">
                <Col lg={12}>
                    <h2>Content is King</h2>
                    <p>
                        Well, maybe a princeling at the moment. The company is under development. We promise the result
                        will be worth the anticipation!
                    </p>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Content;
