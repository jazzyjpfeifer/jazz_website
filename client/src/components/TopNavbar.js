import React, { useEffect } from 'react';
import {Container, Navbar, Nav, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import "./TopNavBar.scss"



function TopNavbar() {
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

        return (
            <Navbar variant="dark" expand="lg" className="color-nav">
            <Container>
                <NavbarBrand href="#home">Justin Pfeifer</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="#bio"
                                     onClick={e => {
                                         let bio = document.getElementById("bio");
                                         e.preventDefault();
                                         bio && bio.scrollIntoView({behavior:"smooth", block:"start"});
                                         window.history.pushState("bio", "bio", "/bio");
                            }}>Bio</NavLink>
                            <NavLink href="#gigs">Gigs</NavLink>
                            <NavLink href="#learn">Learn</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </Nav>
                    </NavbarCollapse>
            </Container>
            </Navbar>
        );
}

export default TopNavbar;
