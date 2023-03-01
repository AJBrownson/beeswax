import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Guest from "./Pages/Guest";
import Portfolio from "./Pages/Portfolio";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-portfolio" element={<Portfolio />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/guestbook" element={<Guest />} />
      </Routes>
    </>
  );
};

export default Routing;
