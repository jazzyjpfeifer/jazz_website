import React, { useState } from "react";
import {Button, Form, FormControl, FormGroup, FormLabel, Stack} from "react-bootstrap";
import ContactAlert from "./ContactAlert";


const ContactForm = () => {
    const [status, setStatus] = useState("Send");
    const [isSent, setEmailSent] = useState(false);

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
            body: JSON.stringify(details)
        });
        console.log(response);
        setStatus("Submit");
        setEmailSent(true);

    };

    if (!isSent) {
        return (
            <Form onSubmit={handleSubmit} className="col-md-5 mx-auto">
                <Stack gap={2}>
                    <FormGroup>
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <FormControl type="text" id="name" required/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <FormControl type="email" id="email" required/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="message">Message:</FormLabel>
                        <FormControl as="textarea" placeholder="Enter your message here" id="message"
                                     style={{height: `100px`}} required/>
                    </FormGroup>
                    <Button className="text-center col-md-5 mx-auto" variant="primary"
                            type="submit">{status}</Button>
                </Stack>
            </Form>
        )
    } else {
        return (
            <ContactAlert />
        )

    }
};

export default ContactForm;
