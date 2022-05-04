// Source Imports
import React from "react";
import { Link } from "react-router-dom";

export default function About(): JSX.Element {
    return(
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
          That feels like an existential question, dont you
          think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}