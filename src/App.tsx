import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { FooterLinks } from "./components/FooterLinks";
import MenuButton from "./components/MenuButton";

function App() {
    return (
        <div className="App">
            <section className="App-header">
                <div className="menu-header">
                    <h1>This is my website!</h1>
                    <MenuButton></MenuButton>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </section>
            <footer>
                <FooterLinks />
            </footer>
        </div>
    );
}

export default App;
