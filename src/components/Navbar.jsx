import { useState } from "react";

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
  
    return (
      <nav>
        <a href="#" className="logo">
          <span>Awais</span>
        </a>
        <ul className={`links ${menuActive ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </ul>
        <i
          className={`bx ${menuActive ? "bx-x" : "bx-menu-alt-right"}`}
          id="menu"
          onClick={() => setMenuActive(!menuActive)}
        ></i>
        <a href="#Contact" className="btn">
          Contact Me
        </a>
      </nav>
    );
  }

  export default Navbar