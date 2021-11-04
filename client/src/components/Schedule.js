import React, {Component} from 'react';
import {Col, Container, Row, Stack} from "react-bootstrap";
import {BsClock, BsFillCalendarEventFill, GoLocation} from "react-icons/all";

const Gigs = {
    1: {
        group: "Glenn Web - Jazz All Stars",
        date: "November 5, 2021",
        time: "8:00 - 11:00 PM",
        location: "Blues N' Katz - St. George, UT 84770"
    },
    2: {
        group: "Rebel Jazz Band w/ Kenny Rampton",
        date: "November 6, 2021",
        time: "7:30 PM",
        location: "DSU - Eccles Fine Arts Center"
    },
    3: {
        group: "Glenn Web - Jazz All Stars",
        date: "November 12, 2021",
        time: "8:00 - 11:00 PM",
        location: "Blues N' Katz - St. George, UT 84770"
    },
    4: {
        group: "Glenn Web - Jazz All Stars",
        date: "November 20th, 2021",
        time: "5:30 PM",
        location: "Private Event"
    }
}

const gigsStyle = {
    margin: "0 auto",
    width: "30em",
    padding: "10px"
}
const icon = {
    fontSize: "20px",
    marginRight: "10px"
}
const gigsInfo = {
    borderBottom: "solid 1px black",
    width: "60%",
    justifyContent: "center",
    margin: "1.5em auto"
}

class Schedule extends Component {

    renderGigs(){
        return Object.entries(Gigs).map(([key, value], i) => {
            return (
                <Stack key={{key}} className="mb-3 mt-3">
                    <h6>{value.group}</h6>
                    <div><BsFillCalendarEventFill  style={icon}/>{value.date}</div>
                    <div><BsClock style={icon}/> {value.time}</div>
                    <div><GoLocation style={icon}/>{value.location}</div>
                    <div style={gigsInfo}/>
                </Stack>
            )
        })
    }

    render() {


        return (
            <Container>
                <Row className="text-center">
                    <Col>
                        <h2>Upcoming Gigs</h2>
                    </Col>
                </Row>
                <Container>
                    <Row style={gigsStyle}>
                        <Stack>
                            {this.renderGigs()}
                        </Stack>
                    </Row>
                </Container>


            </Container>
        );
    }
}

export default Schedule;
