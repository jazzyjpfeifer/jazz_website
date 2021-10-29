import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";

class Schedule extends Component {
    render() {
        return (
            <Container>
                <Row className="text-center">
                    <h2>Upcoming Gigs</h2>
                    <p>Here are my upcoming gigs...</p>
                </Row>


            </Container>
        );
    }
}

export default Schedule;
