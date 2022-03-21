import React from "react";
import {Navbar, Container, Nav, NavLink} from "react-bootstrap";
import "./stylesheets/navbar.css";
export default function navbar() {
    return (
        <div>
            <Navbar id="nav" fixed="top" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand id="brandName" href="/">
                        Daniel Sangermann
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <NavLink className="links" href="/">Home</NavLink>
                        <NavLink className="links" href="/portfolio">Portfolio</NavLink>
                        <NavLink className="links" href="/contact">Contact</NavLink>
                        <NavLink className="links" href="/about">About Me</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}