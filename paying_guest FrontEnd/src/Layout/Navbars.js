
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
      <Navbar {...args} color="primary" container="fluid" bg="primary" variant="dark" >
        <NavbarBrand href="/">Urban Stay</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">About</NavLink>
          </NavItem>
        </Nav>
        <NavLink href="/Login">Login</NavLink>

      </Navbar>
    </div>
  );
}

export default Navbars;