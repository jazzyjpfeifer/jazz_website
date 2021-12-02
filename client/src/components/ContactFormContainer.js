import React from 'react';
import {Container, Row} from "react-bootstrap";
import ContactForm from "./ContactForm";

function ContactFormContainer() {
    return (
        <Container className="mt-5 mb-5" id="contact">
            <Row>
                <h2 className="text-center">Contact Me</h2>
            </Row>
            <Row>
                <ContactForm />
            </Row>

        </Container>
    );
}

export default ContactFormContainer;
