import React, { useState } from "react";
import {Button, Container, Form, FormControl, FormGroup, FormLabel, Stack} from "react-bootstrap";

const ContactForm = () => {
    const [status, setStatus] = useState("Send");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <Container className="mt-5 mb-5" id="contact">
            <h2 className="text-center">Contact Me</h2>
            <Form onSubmit={handleSubmit} className="col-md-5 mx-auto">
                <Stack gap={2}>
                <FormGroup >
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <FormControl type="text" id="name" required/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormControl type="email" id="email" required/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="message">Message:</FormLabel>
                    <FormControl as="textarea" placeholder="Enter your message here" id="message" style={{height: `100px`}} required/>
                </FormGroup>

                    <Button className="text-center col-md-5 mx-auto" variant="primary" type="submit">{status}</Button>
                </Stack>

            </Form>


        </Container>
    );
};

export default ContactForm;
