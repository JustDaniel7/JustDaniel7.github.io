import React, {useEffect, useRef, useState} from "react";
import {Button, Card, Col, Container, Nav, NavLink, Row} from "react-bootstrap";
import "../stylesheets/portfolio.css";
import "../stylesheets/sidebar.css";
import RobotIsland from "/Users/justdaniel/IdeaProjects/p-/src/Images:Logos/RobotIsland.png";
export default function Portfolio () {
    return(<div>
        <Container fluid>
        <Row>
            <Col id="agenda" md={3}>
                <Sidebar/>
            </Col>
            <Col id="projects" md={8}>
                <h2 className="headings" id="game-dev">Game Development</h2>
                <Card id="robotIsland">
                    <h3 className="titleRI" id="robot-island">Robot Island</h3>
                    <Card.Img id="imageOf" src={RobotIsland}/>
                    <Card.Body>
                        <Card.Text id="robotText">
                            This is a university project in Games Engineering in which we developed a 3rd person shooter.
                            The general idea of the game is to have a robot player who can shoot at the opposing robots which follow a path from waypoint to waypoint.
                            You can also shoot cubes to gain points and in order to win, you have to reach the computer facility and destroy it.
                        </Card.Text>
                    </Card.Body>
                    <NavLink className="links" href="/robot-island">
                        <Button id="playButton">Play the Game!</Button>
                    </NavLink>
                </Card>
                <h2 className="headings" id="web-dev">Web Development</h2>
            </Col>
        </Row>
        </Container>
    </div>);

}
const Sidebar = () => {
    const [activeId, setActiveId] = useState();
    const {nestedHeadings} = useHeadingsData();
    useIntersectionObserver(setActiveId);
    return (
        <div>
            <Nav aria-label="Projects" id="sidebar">
                <h1 id="projects">Projects</h1>
                <Headings headings={nestedHeadings} activeId={activeId}/>
            </Nav>
        </div>
    );
};

const getNestedHeadings = (headingElements) => {

    const nestedHeadings = [];
    headingElements.forEach((heading, index) => {
        const {innerText: title, id} = heading;

        if (heading.nodeName === "H2") {
            nestedHeadings.push({id, title, items: []});
        } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
            nestedHeadings[nestedHeadings.length - 1].items.push({
                id,
                title,
            });
        }
    });

    return nestedHeadings;
};

const useHeadingsData = () => {

    const [nestedHeadings, setNestedHeadings] = useState([]);

    useEffect(() => {
        const headingElements = Array.from(
            document.querySelectorAll("h2, h3")
        );

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return {nestedHeadings};
}

const Headings = ({headings, activeId}) => (
    <Nav>
        {headings.map((heading) => (
            <Nav.Item className={heading.id === activeId?"active":""} key={heading.id}>
                <a className="heading" href={`#${heading.id}`}
                   onClick={(e) => {
                       e.preventDefault();
                       document.querySelector(`#${heading.id}`).scrollIntoView({
                           behavior: "smooth"
                       });
                   }}
                >{heading.title}</a>
                {heading.items.length > 0 && (
                    <Nav>
                        {heading.items.map((child) => (
                            <Nav.Item className={child.id === activeId?"active":""} id="subheading"key={child.id}>
                                <a className="link" href={`#${child.id}`}
                                   onClick={(e) => {
                                       e.preventDefault();
                                       document.querySelector(`#${child.id}`).scrollIntoView({
                                           behavior: "smooth"
                                       });
                                   }}
                                >{child.title}</a>
                            </Nav.Item>
                        ))}
                    </Nav>
                )}
            </Nav.Item>
        ))}
    </Nav>
);

const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = useRef({});

    useEffect(() => {
        const callback = (headings) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current);
            const visibleHeadings = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
            });

            const getIndexFromId = (id) =>
                headingElements.findIndex((heading) => heading.id === id);
            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        }

        const observer = new IntersectionObserver(callback, {
            rootMargin: "-110px 0px -40% 0px"
        });

        const headingElements = Array.from(document.querySelectorAll("h2, h3"));
        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
};