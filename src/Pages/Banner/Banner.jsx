import React from "react";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner1 section-margin mx-2">
      <div className="container container-banner1 rounded-2 pt-5 pt-lg-0 h-100">
        <div className="row text-white h-100 d-lg-flex align-items-lg-center">
          <div className="col-lg-6">
            <p className="label">Black Friday</p>
            <h3 className="heading-banner1">
              Sale Up To <span>50%</span> off
            </h3>
            <a href="#" className="btn btn-banner1 mt-4">
              Shop Now
            </a>
          </div>
          <div className="col-lg-6 position-relative">
            <img
              src="./images/home/1.png"
              alt="furniture"
              className="img-fluid position-absolute end-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
