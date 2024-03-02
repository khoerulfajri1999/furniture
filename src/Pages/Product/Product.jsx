import React, { useRef, useState } from "react";
import "./Product.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";

export const Product = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const data = [
    // Data kartu Anda (contoh)
    {
      id: 1,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 2,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 3,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 4,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 5,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 6,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 7,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 8,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 9,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 10,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 11,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    {
      id: 12,
      title: "Chair Minimalist",
      img: "./images/services/2.png",
      price: "$600.00",
    },
    // ... tambahkan lebih banyak data jika diperlukan
  ];

  const loadMore = () => {
    // Menambahkan sejumlah kartu yang akan ditampilkan setiap kali tombol "Load More" ditekan
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
    console.log(visibleCards);
  };

  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <>
      <div className="product section-margin" id="product">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1 className="heading-product">Our Product</h1>
              <p className="subheading-product">Available for all your needs</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col populer d-lg-flex justify-content-lg-between">
              <h3 className="heading-product">Populer Categories</h3>
              <div className="toggle-slider d-lg-block d-flex justify-content-end">
                <i class="bx bxs-chevron-left-circle" onClick={handlePrev}></i>
                <i class="bx bxs-chevron-right-circle" onClick={handleNext}></i>
              </div>
            </div>
          </div>
          <div className="row mt-4 product-populer">
            <div className="col">
              <Swiper
                grabCursor={true}
                centeredSlides={false}
                spaceBetween={20}
                ref={sliderRef}
                navigation={false}
                slidesPerView={"auto"}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="card-product">
                  <div className="img-box rounded-3 d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/product/1.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail-product mt-3 d-flex justify-content-between">
                    <div className="info">
                      <p className="label text-center py-2">Chair</p>
                      <p className="jumlah-produk">30 products</p>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn">
                        <i class="bx bx-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-product">
                  <div className="img-box rounded-3 d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/product/1.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail-product mt-3 d-flex justify-content-between">
                    <div className="info">
                      <p className="label text-center py-2">Chair</p>
                      <p className="jumlah-produk">30 products</p>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn">
                        <i class="bx bx-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-product">
                  <div className="img-box rounded-3 d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/product/1.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail-product mt-3 d-flex justify-content-between">
                    <div className="info">
                      <p className="label text-center py-2">Chair</p>
                      <p className="jumlah-produk">30 products</p>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn">
                        <i class="bx bx-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-product">
                  <div className="img-box rounded-3 d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/product/1.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail-product mt-3 d-flex justify-content-between">
                    <div className="info">
                      <p className="label text-center py-2">Chair</p>
                      <p className="jumlah-produk">30 products</p>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn">
                        <i class="bx bx-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-product">
                  <div className="img-box rounded-3 d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/product/1.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail-product mt-3 d-flex justify-content-between">
                    <div className="info">
                      <p className="label text-center py-2">Chair</p>
                      <p className="jumlah-produk">30 products</p>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn">
                        <i class="bx bx-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="card-product">
                  <div className="img-box rounded-3 d-flex justify-content-center align-items-center py-4 px-2">
                    <img
                      src="./images/product/1.png"
                      alt="product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail-product mt-3 d-flex justify-content-between">
                    <div className="info">
                      <p className="label text-center py-2">Chair</p>
                      <p className="jumlah-produk">30 products</p>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn">
                        <i class="bx bx-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h3 className="heading-product">New Arrival Product</h3>
            </div>
          </div>
          <div className="row new-product mt-5">
            {data.slice(0, visibleCards).map((card) => (
              <div key={card.id} className="col-lg-3 col-md-6 my-3 mx-0.5">
                <div className="card-list m-auto new-card">
                  <div className="img-box d-flex justify-content-center align-items-center py-3">
                    <img
                      src={card.img}
                      className="img-fluid"
                      alt={card.title}
                    />
                  </div>

                  <div className="card-body position-relative">
                    <h5 className="card-title">{card.title}</h5>
                    <div className="rate d-flex">
                      <div className="star">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <p className="jumlah-bintang">(19k)</p>
                    </div>
                    <div className="price-wrapper d-flex justify-content-between">
                      <h3 className="price">{card.price}</h3>
                      <a
                        href="#"
                        className="btn position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center p-3"
                      >
                        <i class="bx bx-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCards < data.length && (
            <div className="btn-load text-center mt-4">
              <button onClick={loadMore} className="btn load-more">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="banner2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <div className="banner-wrapper rounded-3 py-4 px-3 px-lg-5 px-md-5 d-flex justify-content-between align-items-center">
                <div className="content-left">
                  <p className="label">Hot Deal</p>
                  <h1 className="heading-banner2">Sofa Premium Comfort</h1>
                  <div className="price d-flex justify-content-between align-items-center mt-4">
                    <p className="normal">$700.00</p>
                    <p className="promo">$500.00</p>
                  </div>
                </div>
                <div className="content right">
                  <img src="./images/services/3.png " alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-white mt-lg-0 mt-3">
              <div className="banner-wrapper rounded-3 py-4 px-3 px-lg-5 px-md-5 d-flex justify-content-between align-items-center">
                <div className="content-left">
                  <p className="label">Hot Deal</p>
                  <h1 className="heading-banner2">Sofa Premium Comfort</h1>
                  <div className="price d-flex justify-content-between align-items-center mt-4">
                    <p className="normal">$700.00</p>
                    <p className="promo">$500.00</p>
                  </div>
                </div>
                <div className="content right">
                  <img src="./images/services/3.png " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
