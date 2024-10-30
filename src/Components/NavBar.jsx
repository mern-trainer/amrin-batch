import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return <Navbar expand="md" className="bg-body-tertiary mb-2">
        <Container fluid>
            <Navbar.Brand href="#home">
                <Image src="./logo.png" alt="Logo" height={40}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#store">Store</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#about-us">About US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar
