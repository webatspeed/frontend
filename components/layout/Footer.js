import { Container, Image } from "react-bootstrap";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="p-0">
        <Image src="landscape.png" fluid alt="landscape" />
        <div className={classes.footer}>
          footer
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
