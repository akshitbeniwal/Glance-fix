import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Menpopover } from "./Menpopover";
import { Womenpopover } from "./Womenpopover";
import { useAuth } from "../contexts/Authcontext";
import "./css/Navbarcss.css";
export function NavBar() {
  const { currentuser, logout } = useAuth();
  const onclickSignout = () => {
    try {
      const signed_out = logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">SpiffyMode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
              <Menpopover />
            </Navbar.Text>
            <Navbar.Text id="women section">
              <Womenpopover />
            </Navbar.Text>
            {/* <Nav.Text>Women</Nav.Text> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <button
            onClick={(e) => {
              console.log(currentuser.phoneNumber);
            }}
          >
            current user
          </button>
          <Button variant="outline-light">
            <Link to="/signup">Sign In</Link>
          </Button> */}
          {currentuser ? (
            <>
              <h3 className=" badge text-wrap">
                <span className="fst-italic text-reset">
                  logged in as {currentuser.phoneNumber}
                </span>
              </h3>
              <Button
                id="signout"
                variant="outline-light"
                onClick={onclickSignout}
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button variant="outline-light">
              <Link to="/signup">Sign In</Link>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
