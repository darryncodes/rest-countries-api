import React, { useState } from "react";

import "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function Navbar() {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);

        if (darkMode) {
            document.body.setAttribute("data-theme", "dark");
        } else {
            document.body.setAttribute("data-theme", "");
        }
    }

    return (
        <>
            <nav>
                <Container className="d-flex justify-content-between py-3">
                    <h1>Where in the world?</h1>{" "}
                    <button onClick={toggleDarkMode}>
                        {darkMode ? (
                            <>
                                <BsMoonStars /> Dark Mode
                            </>
                        ) : (
                            <>
                                <BsSun /> Light Mode
                            </>
                        )}
                    </button>
                </Container>
            </nav>
        </>
    );
}

export default Navbar;
