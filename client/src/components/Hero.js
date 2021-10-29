import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./Hero.scss";


class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <Container>
                    <section className="hero-content">
                        <Row>
                            <Col className="col-md-12">
                                <h1>Justin Pfeifer</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Jazz Pianist</h3>
                            </Col>
                        </Row>

                    </section>
                    <section>

                    </section>

                </Container>
            </div>


        );
    }
}

export default Hero;
