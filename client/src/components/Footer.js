import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/all";

class Footer extends Component {
    render() {
        const footerStyle = {
            background:"black",
            height:"20em",
            color:"white"
        }
        const socialStyle = {
            width:"20em",
            margin: "0 auto"
        }
        return (
            <Container fluid style={footerStyle}>
                <Row>
                    <h2 className="mt-5">Justin Pfeifer</h2>
                    <p>Jazz Pianist</p>
                </Row>
                <Row className="mt-5" style={socialStyle}>
                    <Col>Follow me on: <BsFacebook/> <BsTwitter /> <BsInstagram/></Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
