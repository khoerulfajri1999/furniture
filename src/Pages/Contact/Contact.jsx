import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="heading-contact">Contact Us</h1>
            <p className="subheading-contact">We serve you all the time</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 text-center">
            <img
              src="./images/contact/1.png"
              className="img-fluid rounded-3 "
              alt=""
            />
          </div>
          <div className="col lg 6 mt-4">
            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label" for="name">
                  Full Name
                </label>
                <input
                  className="form-control rounded-3"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" for="emailAddress">
                  Email Address
                </label>
                <input
                  className="form-control rounded-3"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" for="message">
                  Message
                </label>
                <textarea
                  className="form-control rounded-3"
                  id="message"
                  type="text"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="d-grid">
                <button
                  className="btn btn-primary btn-lg rounded-3"
                  type="submit"
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
