import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container>
                <Navbar.Brand
                    href="#intro"
                    className="fs-2"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('intro');
                    }}
                >
                    {'< '}
                    Boros Balázs
                    {' />'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#intro"
                            className="ml-2 fs-5"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('intro');
                            }}
                        >
                            Rólam
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className="ml-2 fs-5"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('skills');
                            }}
                        >
                            Ismeretek
                        </Nav.Link>
                        <Nav.Link
                            href="#career"
                            className="ml-2 fs-5"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('career');
                            }}
                        >
                            Karrier
                        </Nav.Link>
                    </Nav>
                    <Nav.Link
                        href="#contact"
                        className="ml-2 fs-5"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('contact');
                        }}
                    >
                        Kapcsolat
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
