import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">My Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/registration">Register</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header