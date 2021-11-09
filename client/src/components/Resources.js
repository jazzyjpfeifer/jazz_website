import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";

class Resources extends Component {
    render() {
        const resourceStyle = {
            margin: "0 auto",
            width: "40em",
            padding: "10px",
            position: "relative"
        }
        return (

            <Container>
                <Row className="text-center mt-3">
                    <h2>Learn to Play Jazz Piano</h2>
                    <p>Here are some good resources to get you started:</p>
                </Row>
                <Row style={resourceStyle} xs={12}>
                    <Col> <ListGroup className="p-3" variant="flush">
                        <ListGroupItem><a className="link-primary" href="https://www.amazon.com/Jazz-Piano-Book-Mark-Levine-ebook/dp/B004KA9UWU">The
                            Jazz Piano Book</a> by Mark Levine</ListGroupItem>
                        <ListGroupItem><a className="link-primary" href="https://www.amazon.com/How-Play-Bebop-Vol-1/dp/0739020404/ref=sr_1_1?crid=302AK48D41UPG&dchild=1&keywords=david+baker+jazz&qid=1623184684&s=books&sprefix=David+Baker+%2Caps%2C195&sr=1-1">How
                            to Play Bebop</a> by David Baker</ListGroupItem>
                        <ListGroupItem><a className="link-primary"
                            href="https://www.amazon.com/Voicings-Jazz-Keyboard-Frank-Mantooth/dp/0793534852/ref=sr_1_2?crid=18IH64NKEYW7N&dchild=1&keywords=frank+mantooth+jazz+piano+voicings&qid=1623185600&sprefix=Frank+Mantooth+piano+voi%2Caps%2C190&sr=8-2">Voicings
                            for Jazz Keyboard</a> by Frank Mantooth</ListGroupItem>
                        <ListGroupItem><a className="link-primary" href="https://www.jazzbooks.com/">jazzbooks.com</a> Abersold
                            Play-A-Longs</ListGroupItem>
                    </ListGroup></Col>
                </Row>
            </Container>
        );
    }
}

export default Resources;
