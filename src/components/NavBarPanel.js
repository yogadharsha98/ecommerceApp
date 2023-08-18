import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBarPanel = () => {
  const cartProduct = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          ECart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link to="/products" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link to="/cart" as={Link}>
              My Bag {cartProduct.length}
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarPanel;
