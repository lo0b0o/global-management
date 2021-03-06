import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
    return (
        <div>
            <header>
                <Navbar bg="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand>ForTest</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer to='/products'>
                                    <Nav.Link>
                                        Products Management
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/orders'>
                                    <Nav.Link>
                                        Orders Management
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}


export default Header;