import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
    return (
        <Navbar className='border-bottom' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ms-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/review" className='nav-link'>Reviews</Link>
                        <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                        <Link to="/blogs" className='nav-link'>Blogs</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;