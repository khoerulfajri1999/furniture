import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <div className="services section-margin" id="services">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="heading-services">Our Services</h1>
            <p className="subheading-services mt-3">
              We provide quality and comfortable interior fittings
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="card-services rounded-3 d-flex justify-content-between align-item-center p-4">
              <div className="detail">
                <p className="label">Minimal Design</p>
                <h3 className="heading-services">Classic Softchair</h3>

                <a href="#" className="btn-services btn mt-4">
                  <i class="bx bx-shopping-bag"></i> Shop
                </a>
              </div>
              <div className="img-services">
                <img src="./images/services/1.png" alt="img-services" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <div className="card-services rounded-3 d-flex justify-content-between align-item-center p-4">
              <div className="detail">
                <p className="label">Minimal Design</p>
                <h3 className="heading-services">Elegant Simplechair</h3>

                <a href="#" className="btn-services btn mt-4">
                  <i class="bx bx-shopping-bag"></i> Shop
                </a>
              </div>
              <div className="img-services">
                <img src="./images/services/2.png" alt="img-services" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-services rounded-3 d-flex justify-content-between align-item-center p-4">
              <div className="detail">
                <p className="label">Minimal Design</p>
                <h3 className="heading-services">Comfort chair</h3>

                <a href="#" className="btn-services btn mt-4">
                  <i class="bx bx-shopping-bag"></i> Shop
                </a>
              </div>
              <div className="img-services">
                <img src="./images/services/3.png" alt="img-services" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
