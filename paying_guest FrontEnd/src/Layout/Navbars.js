import { Link } from "react-router-dom"

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navbars(args) {
  return (
    <div>
      <Navbar color="dark" container="fluid" bg="primary" variant="dark" dark >
        <NavbarBrand href="/">Urban Stay</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem >
            <Link to="/owner/login">Login Page</Link>
          </NavItem>
        </Nav>


      </Navbar>
    </div >
  );
}

export default Navbars;