import React from 'react';
import {Col, Container, Row, Stack} from "react-bootstrap";
import GigsMonth from "./GigsMonth";


const gigsStyle = {
    margin: "0 auto",
    width: "40em",
    padding: "10px"
}


function GigsContainer() {

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
                            <GigsMonth />
                        </Stack>
                    </Row>
                </Container>
            </Container>
        );
}

export default GigsContainer;
