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

    function ScrollNavbar(menu_item) {
        let link = document.getElementById(menu_item);
        link && link.scrollIntoView({behavior: "smooth", block:"start"});
        window.history.pushState(link.id, link.id, "/" + String(link.id))
    }

        return (
            <Navbar variant="dark" expand="lg" className="color-nav">
            <Container>
                <NavbarBrand href="#home">Justin Pfeifer</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="#bio"
                                     onClick={e => {
                                         e.preventDefault();
                                         ScrollNavbar("bio")
                            }}>Bio</NavLink>
                            <NavLink href="#gigs"
                                     onClick={e => {
                                         e.preventDefault();
                                         ScrollNavbar("gigs")
                                     }}>Gigs</NavLink>
                            <NavLink href="#gallery"
                                     onClick={e => {
                                         e.preventDefault();
                                         ScrollNavbar("gallery")
                                     }}>Gallery</NavLink>
                            <NavLink href="#learn"
                                     onClick={e => {
                                         e.preventDefault();
                                         ScrollNavbar("learn")
                                     }}>Learn</NavLink>
                            <NavLink href="#contact"
                                     onClick={e => {
                                         e.preventDefault();
                                         ScrollNavbar("contact")
                                     }}
                            >Contact</NavLink>
                        </Nav>
                    </NavbarCollapse>
            </Container>
            </Navbar>
        );
}

export default TopNavbar;
