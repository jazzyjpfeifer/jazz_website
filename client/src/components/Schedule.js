import React, {useState} from 'react';
import {Accordion, Col, Container, Row, Stack} from "react-bootstrap";
import AccordionItem from "react-bootstrap/AccordionItem";
import ScheduleItems from "./ScheduleItems";
import ScheduleMonths from "./ScheduleMonths";


const MONTHS = [
    {id: "month-0", month_name: "January"},
    {id: "month-1", month_name: "February"},
    {id: "month-2", month_name: "March"},
    {id: "month-3", month_name: "April"},
    {id: "month-4", month_name: "May"},
    {id: "month-5", month_name: "June"},
    {id: "month-6", month_name: "July"},
    {id: "month-7", month_name: "August"},
    {id: "month-8", month_name: "September"},
    {id: "month-9", month_name: "October"},
    {id: "month-10", month_name: "November"},
    {id: "month-11", month_name: "December"}
]

const gigsStyle = {
    margin: "0 auto",
    width: "40em",
    padding: "10px"
}


function Schedule(props) {
    const [months, setActive] = useState(MONTHS);

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
                        <Accordion style={gigsStyle}>
                                <div>
                                {months
                                    .map(month => {
                                        return (
                                            <ScheduleMonths eventKey={month} month={month} />
                                        )
                                    })}
                                </div>
                        </Accordion>
                    </Stack>
                </Row>
            </Container>
        </Container>
    );
}

export default Schedule;
