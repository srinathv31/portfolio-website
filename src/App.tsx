import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { FooterLinks } from "./components/FooterLinks";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import MainMenuLinks from "./components/MainMenuLinks";

function App() {
    return (
        <div className="App">
            <section className="App-header">
                <div className="menu-header">
                    <MainMenuLinks menuType="top-menu"/>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="experience" element={<Experience />} />
                </Routes>
            </section>
            <footer>
                <FooterLinks />
            </footer>
        </div>
    );
}

export default App;
