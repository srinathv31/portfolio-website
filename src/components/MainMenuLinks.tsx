// Source Imports
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function MainMenuLinks({ menuType }: {
    menuType: "main-page" | "top-menu",
}): JSX.Element {
    const [isDarkModeToggle, setDarkModeToggle] = useState<boolean>(document.body.classList.contains("dark") ? true : false);
    // Dark Mode Toggle
    useEffect(() => {
        if (isDarkModeToggle) {
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
        }
    }, [isDarkModeToggle]);
    
    const location = useLocation();

    // Radio the top menu
    useEffect(() => {
        const listElements = document.getElementsByTagName("a");
        Array.from(listElements).forEach(item => {
            if (item.className === "App-link" || item.className === "selected-link") {
                item.className = "App-link";
                if (item.className === "App-link" && item.getAttribute("href") === location.pathname){
                    item.className = "selected-link";
                }
            }
        });
    }, [location]);

    return(
        <nav id={ menuType === "main-page" ? "col-2" : "top-menu" }>
            <ul className={ menuType === "main-page" ? "menu-links" : "top-menu-links" } >
                {menuType === "top-menu" && 
                <li>
                    {"Mode: "}<DarkModeToggle checked={!isDarkModeToggle} onChange={()=> setDarkModeToggle(!isDarkModeToggle)} sx={{ m: 1 }}/>
                </li>}
                {menuType === "top-menu" && 
                <li>
                    <Link className="App-link" to="/">Home</Link>
                </li>}
                <li>
                    <Link className="App-link" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="App-link" to="/experience">Experience</Link>
                </li>
                <li>
                    <a className="App-link" href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">Github {<GitHubIcon />}</a>
                </li>
                <li>
                    <Link className="App-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}
