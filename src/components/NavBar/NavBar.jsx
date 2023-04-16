import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './NavBar.css'

export default function NavBar() {
    const expand="lg";
    return (
        <>
            <Navbar key={expand} bg="light" expand={expand} >
                <Container fluid>
                    <Navbar.Brand href="/index.html">
                        <img src="/logo.png" alt="Logo" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Brand href="#" className="name">The Travel Plan</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">
                                    <Button variant="outline-primary" className="register btn">
                                        Register
                                    </Button>
                                </Nav.Link>
                                <Nav.Link href="#action1">
                                    <Button variant="primary" className="sign-in btn">
                                        Sign-In
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}