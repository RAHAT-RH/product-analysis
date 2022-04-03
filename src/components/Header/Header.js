import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <NavLink className='py-3 text-white text-decoration-none' to="/home">React-Bootstrap</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='text-decoration-none text-white me-3'  to="/">Home</Link>
                            <Link className='text-decoration-none text-white me-3'  to="/review">Review</Link>
                            <Link className='text-decoration-none text-white me-3'  to="/blog">Blog</Link>
                            <Link className='text-decoration-none text-white'  to="/about">About</Link>
                            {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;