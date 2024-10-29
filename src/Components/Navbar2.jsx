import { Navbar, Nav, Container } from "react-bootstrap";
import "./MyNavbar.css";

export default function Navbar2() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="fixed-top custom-navbar  "
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./images/lg1111.png" // Replace with the path to your logo
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          Architects Space
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="#designs">Designs</Nav.Link>
            <Nav.Link href="#collections">Collections</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
