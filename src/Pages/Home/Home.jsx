import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="container lg-h-100 container-home">
        <div className="row lg-h-100">
          <div className="col-lg-6 lg-d-flex lg-flex-column lg-justify-content-end content-left">
            <h1 className="heading">
              Make Your Interior More Modern and Minimalist
            </h1>
            <p className="subheading text-white">
              There are several product variants that you can choose, both local
              and foreign brands
            </p>
            <div className="btn-home mt-5">
              <a href="#" className="btn btn-buy py-2 px-3 py-lg-3 px-lg-4">
                Buy Now
              </a>
              <a
                href="#"
                className="btn btn-learn ms-4 py-2 px-3 py-lg-3 px-lg-4"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6 position-relative d-none d-lg-block">
            <img
              src="./images/home/1.png"
              alt="furniture"
              className="img-fluid position-absolute"
            />
            <img
              src="./images/home/2.png"
              alt="furniture"
              className="img-fluid position-absolute img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
