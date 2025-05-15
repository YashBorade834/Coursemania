import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">CourseMania</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="auth">Login</Link>
        <Link to="/register" className="auth">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
