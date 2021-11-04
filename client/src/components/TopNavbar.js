import React, {Component} from 'react';
import {Container, Navbar, Nav, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import "./TopNavBar.scss"



class TopNavbar extends Component {
    render() {
        return (
            <Navbar variant="dark" expand="lg" className="color-nav">
            <Container>
                <NavbarBrand href="#home">Justin Pfeifer</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#bio">Bio</NavLink>
                            <NavLink href="#learn">Learn</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </Nav>
                    </NavbarCollapse>
            </Container>
            </Navbar>
        );
    }
}

export default TopNavbar;
