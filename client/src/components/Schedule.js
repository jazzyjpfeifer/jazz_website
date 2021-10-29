import React, {Component} from 'react';
import {Col, Container, Row, Stack} from "react-bootstrap";
import {BsClock, BsFillCalendarEventFill, GoLocation} from "react-icons/all";

class Schedule extends Component {
    render() {
        const gigsStyle = {
            margin: "0 auto",
            width: "27em",
            padding: "10px",
            position: "relative"
        }
        return (
            <Container>
                <Row className="text-center">
                    <Col>
                        <h2>Upcoming Gigs</h2>
                    </Col>
                </Row>
                <Container>
                    <Row style={gigsStyle}>
                        <Stack className="mb-3 mt-3 jus">
                            <div><BsFillCalendarEventFill /> November 10th, 2021</div>
                            <div><BsClock /> 8:00 PM</div>
                            <div><GoLocation /> Blues N' Katz - St. George, UT 84770</div>
                        </Stack>
                        <Stack className="mb-3 mt-3 jus">
                            <div><BsFillCalendarEventFill /> November 10th, 2021</div>
                            <div><BsClock /> 8:00 PM</div>
                            <div><GoLocation /> Blues N' Katz - St. George, UT 84770</div>
                        </Stack>
                        <Stack className="mb-3 mt-3 jus">
                            <div><BsFillCalendarEventFill /> November 10th, 2021</div>
                            <div><BsClock /> 8:00 PM</div>
                            <div><GoLocation /> Blues N' Katz - St. George, UT 84770</div>
                        </Stack>
                    </Row>
                </Container>


            </Container>
        );
    }
}

export default Schedule;
