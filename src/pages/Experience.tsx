// Source Imports
import React from "react";
import { Card, CardMedia, CardActionArea } from "@mui/material";

export default function Experience(): JSX.Element {
    return(
        <>
            <section className="container">
                <div id="col-1">
                    <h2>TRIC Media</h2>
                    <Card variant="elevation">
                        <CardActionArea
                            onClick={() => console.log("CHEESE")}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://i.imgur.com/BkIeqWm.png"
                                alt="green iguana"
                            ></CardMedia>
                            <div className="card-button-text">
                                Take the Tour 👉
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
                <div id="col-2">
                    <h2>TRIC Research and Development</h2>
                    <p>Welcome to my experience.</p>
                </div>
            </section>
        </>
    );
}
