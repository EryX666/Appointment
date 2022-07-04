import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./styles/NavbarStyles.css";

import styles from "./styles/NavbarStyles";

function Menu(props) {
  const { classes } = props;
  return (
    <Navbar expand="lg" className={classes.navbar} bg="transparent">
      <Navbar.Brand className={classes.navbarLogo} href="#">
        <img
          src="/assets/blue_appointment_icon.svg"
          width="120"
          height="100"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <img
          src="/assets/APPOINTMENT_Logo_Black.svg"
          width="300"
          height="100"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Container>
        <Nav className="mr-auto">
          <Nav.Link
            bsPrefix={`${classes.navbarLinksContainer} navlink`}
            href="#"
          >
            <Link
              className={classes.navbarLink}
              to="HeadingSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link
            bsPrefix={`${classes.navbarLinksContainer} navlink`}
            href="#"
          >
            <Link
              className={classes.navbarLink}
              to="FeatureSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Features
            </Link>
          </Nav.Link>

          <Nav.Link
            bsPrefix={`${classes.navbarLinksContainer} navlink`}
            href="#"
          >
            <Link
              className={classes.navbarLink}
              to="InstructionsSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              How it works?
            </Link>
          </Nav.Link>
          <Nav.Link
            bsPrefix={`${classes.navbarLinksContainer} navlink`}
            href="#"
          >
            <Link
              className={classes.navbarLink}
              to="PhotoSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Screenshots
            </Link>
          </Nav.Link>
          <Nav.Link
            bsPrefix={`${classes.navbarLinksContainer} navlink`}
            href="#"
          >
            <Link
              className={classes.navbarLink}
              to="ContactSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact Us
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default withStyles(styles)(Menu);
