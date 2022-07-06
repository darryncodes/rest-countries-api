import React, { useState } from "react";

import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

import { Link } from "react-router-dom";

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

    window.onload = function detectDarkModePreference() {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.body.setAttribute("data-theme", "dark");
            setDarkMode((prevMode) => !prevMode);
        }
    };

    return (
        <>
            <nav>
                <Container className="d-flex justify-content-between align-items-center py-3">
                    <p>
                        <Link to={"/"} className={styles.link}>
                            Where in the world?
                        </Link>
                    </p>
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
