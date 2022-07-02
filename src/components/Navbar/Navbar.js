import React, { useState } from "react";

import "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

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
        <BrowserRouter>
            <nav>
                <Container className="d-flex justify-content-between py-3">
                    <p>
                        <a href="/" as={Link} to="/">
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
                    <Route path="/" />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Navbar;
