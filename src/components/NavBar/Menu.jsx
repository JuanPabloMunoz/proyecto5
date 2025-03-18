import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"> 
      <Container>
        <Navbar.Brand >MENÚ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/peliculas">Peliculas</Nav.Link>
            <NavDropdown title="Extras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Conócenos</NavDropdown.Item>
              <NavDropdown.Item href="*">
                En Construcción
              </NavDropdown.Item>
             </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;



/*import { Link } from "react-router-dom"


export const NavBar =()=>{
        return(
            <nav className="nav-container">
                <ul>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/about'}>Acerca de Nosotros</Link>
                    <Link to={'/digimons'}>Ver Lista Digimons</Link>
                </ul>
            </nav>
        )
}
*/