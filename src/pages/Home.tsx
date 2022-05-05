// Source Imports
import React from "react";
import MainMenuLinks from "../components/MainMenuLinks";

export default function Home(): JSX.Element {
    return(
        <>
            <section className="container">
                <div id="col-1">
                    <h2>Hi, my name is Srinath Venaktesh</h2>
                    <p>Welcome to my website.</p>
                    <p>I like Developing and Creating new things.</p>
                </div>
                <MainMenuLinks menuType="main-page"/>
            </section>
        </>
    );
}
