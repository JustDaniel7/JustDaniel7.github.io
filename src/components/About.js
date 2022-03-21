import React from "react";
import "../components/stylesheets/about.css"
import {Container} from "react-bootstrap";

export default function About() {
    return (<div>
        <Container>
            <h1 id="heading">My Story</h1>
            <p id="text">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus id, itaque neque quisquam sapiente tempore voluptates? Ab ad at atque deserunt, distinctio ea, laudantium maiores nesciunt nobis nulla, quibusdam voluptate?</span>
                <span>Adipisci alias, assumenda autem beatae blanditiis delectus deleniti doloremque eligendi enim ex harum, ipsa minus nihil omnis quidem quo similique soluta sunt velit voluptate? Est expedita id quaerat repudiandae voluptate.</span>
                <span>Dolore nemo rerum sapiente sit! Architecto cumque dolore est hic, ipsa minima molestiae odio optio quas reiciendis, rerum sequi? Eos fuga inventore quae quam quibusdam quidem, temporibus ut voluptas voluptate!</span><span>Accusamus aliquam commodi debitis delectus distinctio eligendi esse est facere, harum, illum impedit ipsum laboriosam laudantium minus necessitatibus nesciunt odit optio quaerat quasi quibusdam quisquam quos rem sed velit veniam.</span>
                <span>Alias aliquid cupiditate debitis deleniti dicta distinctio doloremque eaque enim, excepturi explicabo fugiat incidunt ipsam ipsum iure iusto laborum neque odit pariatur, perspiciatis qui saepe tempora temporibus, velit vitae voluptate.</span>
            </p>
        </Container>
    </div>);
}