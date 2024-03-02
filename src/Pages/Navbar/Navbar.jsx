import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <span>MY</span>FURNITURE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse lg-d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="focus navbar-nav me-5">
            <a className="nav-link me-4" href="#">
              Home
            </a>

            <a className="nav-link me-4" href="#services">
              Services
            </a>

            <a className="nav-link me-4" href="#product">
              Product
            </a>

            <a className="nav-link me-4" href="#blog">
              Blog
            </a>
            <a className="nav-link" href="#contact">
              Contact us
            </a>
          </div>
          <div className="icons-home mt-4 mt-lg-0">
            <a href="#">
              <i className="bx bx-user"></i>
            </a>
            <a href="#" className="ms-3">
              <i className="bx bx-shopping-bag"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
