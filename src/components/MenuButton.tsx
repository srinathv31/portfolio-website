// Source Imports
import React from "react";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import MainMenuLinks from "./MainMenuLinks";
import { Menu } from "@mui/icons-material";

export default function MenuButton(): JSX.Element {
    const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

    return(
        <div>
            <Button onClick={() => setToggleDrawer(!toggleDrawer)} variant="contained" endIcon={<Menu />}>
                {"MENU"}
            </Button>
            <Drawer
                anchor={"right"}
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
            >
                {<MainMenuLinks menuType="side-menu" setToggleDrawer={setToggleDrawer}/>}
            </Drawer>
        </div>
    );
}
