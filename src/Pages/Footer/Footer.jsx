import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer section-margin pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col1">
            <h3 className="footer-brand">
              <span>MY</span>FURNITURE
            </h3>
            <a href="#" className="mt-3 d=inline-block">
              help@iplant.com
            </a>
            <a href="#" className="d-block">
              +62852738738722
            </a>
            <div className="icon-footer mt-3">
              <a href="#">
                <i class="bx bxl-whatsapp"></i>
              </a>
              <a href="#">
                <i class="bx bxl-instagram-alt mx-2"></i>
              </a>
              <a href="#">
                <i class="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col2 mt-4 mt-md-0">
            <h3>Services</h3>
            <ul className="ps-0">
              <li>
                <a href="#">House Plant</a>
              </li>
              <li>
                <a href="#">Garden Plant</a>
              </li>
              <li>
                <a href="#">Vase</a>
              </li>
              <li>
                <a href="#">Fertilizer</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col3 col-md-3 mt-4 mt-md-0">
            <h3>Information</h3>
            <ul className="ps-0">
              <li>
                <a href="#">Office Hours</a>
              </li>
              <li>
                <a href="#">Requirements</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col4 col-md-4 mt-4 mt-lg-0">
            <h3>Helpfull Link</h3>
            <ul className="ps-0">
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col5 col-md-3 mt-4 mt-lg-0">
            <h3>Address</h3>
            <ul className="ps-0">
              <li>
                <p className="text-white">
                  Jl Gatot Subroto No. 123 Blok. A23 Malang, Jawa Timur
                </p>
              </li>
              <li>
                <a href="#">Google Maps</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col col6 text-center">
            <p className="text-white">
              &copy;Copyright 2021 All Right Reserve | Built by{" "}
              <a href="#">Khoerul Fajri</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
