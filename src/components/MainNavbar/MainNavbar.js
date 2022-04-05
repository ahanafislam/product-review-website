import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const MainNavbar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ms-auto">
                        <CustomLink to="/" className='nav-link m-1'>Home</CustomLink>
                        <CustomLink to="/review" className='nav-link m-1'>Reviews</CustomLink>
                        <CustomLink to="/dashboard" className='nav-link m-1'>Dashboard</CustomLink>
                        <CustomLink to="/blogs" className='nav-link m-1'>Blogs</CustomLink>
                        <CustomLink to="/about" className='nav-link m-1'>About</CustomLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;