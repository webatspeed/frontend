import {
  Container,
  Image,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "react-bootstrap";
import classes from "./Navigation.module.scss";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const Navigation = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className={`shadow bg-light ${classes.navbar}`}
    >
      <Container>
        <NavbarBrand href="#">
          <Image
            src="/logo_transparent_white.png"
            className={classes["image"]}
            alt="logo"
          />
          Web at Speed
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse>
          <Nav as="ul" className={`ms-auto ${classes.nav}`}>
            <NavItem as="li">
              <NavLink tabIndex={0} href="#dev">
                Development
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink tabIndex={1} href="#startup">
                Start-Up
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink tabIndex={2} href="#fullstack">
                Full Stack
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink tabIndex={3} href="#devices">
                Devices
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink tabIndex={4} href="#customers">
                Customers
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink tabIndex={5} href="#recruiters">
                Recruiters
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink tabIndex={6} href="#contact">
                Content
              </NavLink>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
