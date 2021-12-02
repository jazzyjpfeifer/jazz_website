import React, {useState} from 'react';
import {Alert, Button, Row} from "react-bootstrap";
import ContactForm from "./ContactForm";

function ContactAlert() {

        return (
            <Alert className="alert-info">
                <Row>
                    <h6>Message was sent</h6>
                    <p>I check emails periodically and will get back to you shortly.  Thank you!</p>
                </Row>
            </Alert>
        );

}

export default ContactAlert;
