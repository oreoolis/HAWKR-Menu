import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css'

const logo = process.env.REACT_APP_LOGO_URL;

function BasicExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="navBar bg-body-tertiary">
        <Navbar.Brand>
          <Link to="/home">
            <img src={logo}
              className="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/menu" className='text-link'>Menu</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to = "/business" className='text-link'>Our Story</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to = "/contact" className='text-link'>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;