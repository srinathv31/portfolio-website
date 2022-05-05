// Source Imports
import React from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { DarkModeToggle } from "./DarkModeToggle";

export default function MainMenuLinks({ menuType, setToggleDrawer }: {
    menuType: "main-page" | "side-menu",
    setToggleDrawer?: (t: boolean) => void
}): JSX.Element {
    return(
        <nav id="col-2">
            {setToggleDrawer !== undefined && 
                <IconButton aria-label="delete" size="large" style={{ color: "white", position: "absolute", top: 20, right: 20 }} onClick={() => setToggleDrawer(false)}>
                    <Close fontSize="inherit" />
                </IconButton>}
            <ul className="menu-links">
                {menuType === "side-menu" && <li style={{ color: "white" }}>
                    {"Mode: "}<DarkModeToggle onChange={()=>console.log("change mode")} sx={{ m: 1 }} defaultChecked />
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
