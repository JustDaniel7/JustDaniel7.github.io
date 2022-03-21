import React from "react";
import Info from "./Info";
import ImageQuote from "./imageQuote";
import {Col, Row} from "react-bootstrap";

export default function Homepage () {
    return (
        <div>
            <Row>
                <Col lg={5}>
                    <Info id="info"/>
                </Col>
                <Col id="image" lg={7}>
                    <ImageQuote/>
                </Col>
            </Row>
        </div>
    );
}