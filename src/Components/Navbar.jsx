import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./styles/NavbarStyles.css";

// import { useScrollPosition } from "../hooks";

function Menu() {
	// const navbarLogo = "/assets/blue_appointment_icon.svg";
	// const navbarLogoText = "/assets/APPOINTMENT_Logo_Black.svg";
	return (
		<Navbar expand="lg" className="navbar">
			<Navbar.Brand className="navbarLogo" href="#">
				<img
					src="/assets/blue_appointment_icon.svg"
					width="80"
					height="60"
					alt="Logo"
				/>
				<img
					src="/assets/APPOINTMENT_Logo_Black.svg"
					width="250"
					height="100"
					alt="Logo"
				/>
			</Navbar.Brand>

			<Container>
				<Nav className="mr-auto">
					<Nav.Link
						bsPrefix={`navbarLinksContainer navlink`}
						href="#">
						<Link
							className="navbarLink"
							to="HeadingSection"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}>
							Home
						</Link>
					</Nav.Link>
					<Nav.Link
						bsPrefix={`navbarLinksContainer navlink`}
						href="#">
						<Link
							className="navbarLink"
							to="FeatureSection"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}>
							Features
						</Link>
					</Nav.Link>

					<Nav.Link
						bsPrefix={`navbarLinksContainer navlink`}
						href="#">
						<Link
							className="navbarLink"
							to="InstructionsSection"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}>
							How it works?
						</Link>
					</Nav.Link>
					<Nav.Link
						bsPrefix={`navbarLinksContainer navlink`}
						href="#">
						<Link
							className="navbarLink"
							to="PhotoSection"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}>
							Screenshots
						</Link>
					</Nav.Link>
					<Nav.Link
						bsPrefix={`navbarLinksContainer navlink`}
						href="#">
						<Link
							className="navbarLink"
							to="ContactSection"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}>
							Contact Us
						</Link>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Menu;
