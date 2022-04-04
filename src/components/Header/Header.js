import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import image from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Link className='py-3 text-white text-decoration-none' to="/"><img src={image} style={{width: '150px', height: '40px'}} alt="" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='text-decoration-none  me-3'  to="/">Home</CustomLink>
                            <CustomLink className='text-decoration-none me-3'  to="/review">Review</CustomLink>
                            <CustomLink className='text-decoration-none  me-3'  to="/blog">Blog</CustomLink>
                            <CustomLink className='text-decoration-none '  to="/charts">Dashboard</CustomLink>
                            {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;