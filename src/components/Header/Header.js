import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <NavLink className='py-3 text-white text-decoration-none' to="/home"><img src={logo} style={{width: '100px', height: '50px'}} alt="" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='text-decoration-none  me-3'  to="/">Home</CustomLink>
                            <CustomLink className='text-decoration-none me-3'  to="/review">Review</CustomLink>
                            <CustomLink className='text-decoration-none  me-3'  to="/blog">Blog</CustomLink>
                            <CustomLink className='text-decoration-none '  to="/charts">Charts</CustomLink>
                            {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;