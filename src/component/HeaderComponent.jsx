import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
  NavLink,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
              </DropdownButton>

              <Form.Control type="text" placeholder="Search in shop..." />
              <Button variant="warning">
                <i class="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span
                  className="position-absolute top-1 start-10 translate-middle
                p-2 bg-danger border border-light rounded-circle"
                ></span>
              </Nav.Link>
            </LinkContainer>
            <Nav.Link href="#pricing">
              <Badge pill bg="danger">
                2
              </Badge>
              CART
            </Nav.Link>
            <NavDropdown title="Jhon Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My profiles
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
              <NavDropdown.Item to="/login">
                <Nav.Link>Login</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item to="/register">
                <Nav.Link>Register</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item to="/login">
                <Nav.Link>
                  <Badge pill bg="danger">
                    2
                  </Badge>
                  <i className="bi bi-cart-dash"></i>
                  <span className="ms-1">CART</span>
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
