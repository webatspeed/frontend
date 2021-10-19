import { Col, Container, Row } from "react-bootstrap";
import Home from "../../pages";

const Layout = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Home />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
