import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, NavLink } from 'react-bootstrap';

function TopBar() {
  return (
    <div className='topbar w-100 pe-3'>
      <Navbar expand="md">
        <Container>
          <div className='d-flex w-100 justify-content-between'>
            <Navbar.Brand href="/">
              <div className='topbar-brand'>Jacobo oposiciones</div>
              </Navbar.Brand>
            <NavLink href='/' className='topbar-link-student my-auto'>Acceso Alumnos</NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
    
  );
}

export default TopBar;


