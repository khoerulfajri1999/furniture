import React from "react";
import "./Blog.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export const Blog = () => {
  return (
    <div className="blog section-margin " id="blog">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1 className="heading-blog">Latest Blog</h1>
            <p className="subheading-blog">
              we provide a variety of interesting information about the interior
            </p>
          </div>
        </div>
        <div className="row mt-4 py-4">
          <div className="col col-lg-12">
            <Swiper
              grabCursor={true}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4.5,
                  spaceBetween: 40,
                },
              }}
              slidesPerView={"auto"}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="card-product">
                <div className="card">
                  <img
                    src="./images/blog/1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">How To Make A Room Look Neat</h5>
                    <p className="date">22 November 2021</p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.....
                    </p>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="card-product">
                <div className="card">
                  <img
                    src="./images/blog/1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">How To Make A Room Look Neat</h5>
                    <p className="date">22 November 2021</p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.....
                    </p>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="card-product">
                <div className="card">
                  <img
                    src="./images/blog/1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">How To Make A Room Look Neat</h5>
                    <p className="date">22 November 2021</p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.....
                    </p>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="card-product">
                <div className="card">
                  <img
                    src="./images/blog/1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">How To Make A Room Look Neat</h5>
                    <p className="date">22 November 2021</p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.....
                    </p>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="card-product">
                <div className="card">
                  <img
                    src="./images/blog/1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">How To Make A Room Look Neat</h5>
                    <p className="date">22 November 2021</p>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.....
                    </p>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
