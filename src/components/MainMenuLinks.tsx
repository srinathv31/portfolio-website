// Source Imports
import { Switch } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function MainMenuLinks({ menuType }: {
    menuType: "main-page" | "side-menu"
}): JSX.Element {
    return(
        <nav id="col-2">
            <ul className="menu-links">
                { menuType === "side-menu" && <li>
                    <Switch></Switch>
                </li>}
                <li>
                    <Link className="App-link" to="/about">Projects</Link>
                </li>
                <li>
                    <Link className="App-link" to="/about">Github</Link>
                </li>
                <li>
                    <Link className="App-link" to="/about">Experience</Link>
                </li>
                <li>
                    <Link className="App-link" to="/about">Resume</Link>
                </li>
            </ul>
        </nav>
    );
}
