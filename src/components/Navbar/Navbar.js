import React, { useState } from "react";

import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Home from "./../pages/Home";

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
            <BrowserRouter>
                <nav>
                    <Container className="d-flex justify-content-between align-items-center py-3">
                        <p>
                            <a
                                href="/"
                                as={Link}
                                to="/"
                                className={styles.link}
                            >
                                Where in the world?
                            </a>
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
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default Navbar;
