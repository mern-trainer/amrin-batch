import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    // useNavigate Hook => conditional redirect or navigations

    const navigate = useNavigate()

    return <Navbar expand="md" className="bg-body-tertiary mb-2">
        <Container fluid>
            <Navbar.Brand href="#home">
                <Image src="./logo.png" alt="Logo" height={40}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex align-items-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#store">Store</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#about-us">About US</Nav.Link>
                    <FaShoppingCart className='ms-3' size={20} onClick={() => navigate("/cart")}/>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar
