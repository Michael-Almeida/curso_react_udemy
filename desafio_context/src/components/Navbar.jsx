import React from "react";

import { NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/contato">Contato</NavLink>
      <NavLink to="/portifolio">Portifolio</NavLink>
    </nav>
  );
};

export default Navbar;
