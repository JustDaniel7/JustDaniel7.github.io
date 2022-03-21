import React, {useState} from "react";
import axios from "axios";
import {Button, Container, Form} from "react-bootstrap";
import "../components/stylesheets/contact.css";

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const initialState = {name:'',email:'',message:''};
    const [eachEntry, setEachEntry] = useState(initialState);
    const {name, email, message} = eachEntry;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const requestOptions = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(eachEntry)
        };
        let response = await fetch("http://localhost:3002/send",requestOptions)
            setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    }
    const handleOnChange = e => {
        setEachEntry({...eachEntry,[e.target.name]:e.target.value})
    }
    return (
        <Container className="container-sm">
            <Form id="contact-form" onSubmit={handleSubmit} method="POST">
                <Form.Label id="contactMe">Contact Me!</Form.Label>
                <Form.Group controlId="formBasicName" className="form-group">
                    <Form.Label className="labelName">Name</Form.Label>
                    <Form.Control
                        onChange={handleOnChange}
                        value={name}
                        name='name'
                        type="name"
                        placeholder="Enter your Name"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="labelName margin">Email
                        address</Form.Label>
                    <Form.Control
                        onChange={handleOnChange}
                        value={email}
                        name='email'
                        type="email"
                        placeholder="Enter your Email"/>

                </Form.Group>
                <Form.Group controlId="formBasicTextField"
                            className="form-group">
                    <Form.Label className="labelName margin">Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        onChange={handleOnChange}
                        value={message}
                        name='message'
                        type="text"
                        placeholder="Your message here..."/>
                </Form.Group>
                <Button id="submitButton" type="submit"
                        className="btn btn-primary">{status}
                </Button>
            </Form>
        </Container>
    );
}



export default Contact;