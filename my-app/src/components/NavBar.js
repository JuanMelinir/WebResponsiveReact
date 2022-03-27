import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import trademark from '../assets/logoinsiders.png'
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img src={trademark} width="150" height="40" className='imageLogo'></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#"><h6 className="textNavbar">Anime</h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><h6 className="textNavbar">Bandas</h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><h6 className="textNavbar">Películas</h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><h6 className="textNavbar">Clásicos</h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><h6 className="textNavbar">Otros</h6></a>
        </li>
      </ul>
    </div>
  </div>
</nav>{/*
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
  </Navbar>*/}
    </>
  );
};

export default NavBar;
