import React from "react";
import About from "./about";
import Error from "./Error";
import Home from "./Home";
import Navbar from "./Navbar";
import People from "./People";
import Person from "./Person";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ReactRouter = () => {
    return <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/people" element={<People />} />
            <Route path="/person/:id" element={<Person />} />

            {/* If path is not found we should go to Error Page */}
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
}

export default ReactRouter;