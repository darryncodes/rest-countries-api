import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";

function App() {
    return (
        <Router basename="/">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/:info" element={<Info />} />
            </Routes>
        </Router>
    );
}

export default App;
