import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = () => {
    return (
        <Navbar className='border-bottom' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/review">Reviews</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;