import React, { useState } from "react";
import "./Navbar.css";
import Header from "./Body/header";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="Navbar">
      <span className="nav-logo"><a href="#home"><span style={{color:'red'}}>C</span>hintu...</a></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Skills</a>
        <a href="#contact">Contact</a>
        <a href="https://drive.google.com/file/d/12PFgfuVSy_peJgy6-cHBAubOnUrx9CWL/view" target="_blank" rel="noreferrer" download>CV</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        
      </div>
    </div>
      <Header/>
    <br/>
    </>
  );
};

export default Navbar;