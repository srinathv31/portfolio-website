// Source Imports
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { DarkModeToggle } from "./DarkModeToggle";

export default function MainMenuLinks({ menuType, setToggleDrawer }: {
    menuType: "main-page" | "side-menu",
    setToggleDrawer?: (t: boolean) => void
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
    
    return(
        <nav id="col-2">
            {setToggleDrawer !== undefined && 
                <IconButton aria-label="delete" size="large" style={{ color: isDarkModeToggle ? "black" : "white", position: "absolute", top: 20, right: 20 }} onClick={() => setToggleDrawer(false)}>
                    <Close fontSize="inherit" />
                </IconButton>}
            <ul className="menu-links">
                {menuType === "side-menu" && <li>
                    {"Mode: "}<DarkModeToggle checked={!isDarkModeToggle} onChange={()=> setDarkModeToggle(!isDarkModeToggle)} sx={{ m: 1 }}/>
                </li>}
                {menuType === "side-menu" && <li>
                    <Link className="App-link" to="/">Home</Link>
                </li>}
                <li>
                    <Link className="App-link" to="/projects">Projects</Link>
                </li>
                <li>
                    <a className="App-link" href="https://github.com/srinathv31" target={"_blank"} rel="noreferrer">Github</a>
                </li>
                <li>
                    <Link className="App-link" to="/experience">Experience</Link>
                </li>
                <li>
                    <Link className="App-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}
