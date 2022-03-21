import './App.css';
import Homepage from "./components/Home/Homepage";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import "./components/stylesheets/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import About from "./components/About";
import IslandRobots from "./components/Portfolio/islandRobots";
import "./components/Home/Info";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div id="page">
                    <Routes>
                        <Route path="/" exact element={<Homepage/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/robot-island" element={<IslandRobots/>}/>
                    </Routes>
                </div>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
                <footer id="footer" className="fixed-bottom bg-dark">
                    <p>Copyright © 2022 Daniel Sangermann. All Rights
                        Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
