import React from "react";
import {Button, Col, Container, Form, NavLink, Row} from "react-bootstrap";
import "../stylesheets/info.css";
import LinkedInBanner
    from "/Users/justdaniel/IdeaProjects/p-/src/Images:Logos/LinkedIn_Logo.png";
import InstaBanner
    from "/Users/justdaniel/IdeaProjects/p-/src/Images:Logos/instaBanner.png";

export default function Info() {
    const vagueTitles = ["strategic", "dedicated", "pragmatic", "open-minded", "innovative"];
    return (<div>
        <Form>
            <div id="info">
                <Form.Label id="my-name"> Daniel Sangermann </Form.Label>
                <Form.Label id="vague-titles">
                    {vagueTitles.map(title => {
                        return title === vagueTitles[vagueTitles.length - 1] ?
                            (title) : (title) + " - ";
                    })}
                </Form.Label>
                <Form.Label className="contactInfo">Drususallee 87, 41460
                    Neuss</Form.Label>
                <Form.Label
                    className="contactInfo">daniel.sangermann@hotmail.de</Form.Label>
                <Form.Label id="introduction"> Introduction of
                    Myself </Form.Label>
                <br/>
                <Form.Text id="introText">Hi! I'm Daniel. You should know that I
                    found my passion in Front-End Web-Development and that I am
                    currently enrolled
                    in the program "Informatics: Games Engineering" at the
                    Technical University Munich. Concerning business,
                    I am a very hard-working person who only conforms with the
                    norm of excellence. My goal and motivation is bringing value
                    to the people I offer my service to and earning a little bit
                    of money while studying in order to travel and meet lots of
                    very interesting and fun people I can practice the languages
                    that I have been learning with.</Form.Text>
                <Button id="toAbout">Learn more about me!<NavLink
                    className="links" href="/about"/></Button>
                <Container id="socialMedia">
                    <a href="https://www.linkedin.com/in/daniel-sangermann-941894204/"><img
                        id="linkedIn" src={LinkedInBanner} alt="LinkedIn"/></a>
                    <a  href="https://www.instagram.com/_justdaniel/"><img
                        id="instagram" src={InstaBanner} alt="Instagram"/></a>
                </Container>
            </div>
        </Form>
    </div>
);
}