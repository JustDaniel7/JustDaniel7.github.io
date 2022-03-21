import React from "react";
import {Button, Card, Col, Container, NavLink, Row} from "react-bootstrap";
import "../stylesheets/imageQuote.css";
import photo from "/Users/justdaniel/IdeaProjects/p-/src/Images:Logos/photo.JPG";
import {Link} from "react-router-dom";

export default function imageQuote() {
    return (<div>
        <div id="imageQuote">
            <Card>
                <Card.Img id="photo" src={photo}/>
                <Card.Body>
                    <Row className="justify-content-center">
                        <Col className="me-auto">
                            <NavLink className="links" href="/contact">
                                <Button id="contactButton">
                                    Send me a Message
                                </Button>
                            </NavLink>

                        </Col>
                        <Col className="me-auto">
                            <NavLink href="/portfolio" className="links">
                                <Button id="portfolioButton">
                                    My Project Portfolio
                                </Button>
                            </NavLink>

                        </Col>
                    </Row>
                    <Card.Text id="quote">
                        "There are no stupid questions, there are only
                        inquisitive idiots."
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>);
}