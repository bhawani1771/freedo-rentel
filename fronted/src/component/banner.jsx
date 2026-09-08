import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './design.css';

 function HeroBanner() {
  return (
    <div className="hero-container">
      {/* LEFT DIV: Text + Search Widget */}
      <div className="hero-left">
        <p className="sub-title">Two Wheelers Rentals</p>
        <h1 className="main-title">Freedom To Move</h1>
        <p className="description">Presenting the safe, reliable and affordable mobility solution</p>

        {/* Search Bar Widget */}
        <div className="search-card">
          <h3 className="search-heading">Search your next ride</h3>
          <div className="search-inputs-wrapper">
            <div className="input-group">
              <span className="icon">📍</span>
              <input type="text" defaultValue="Jaipur" placeholder="City" />
            </div>

            <div className="divider"></div>

            <div className="input-group">
              <span className="icon">📅</span>
              <input type="text" placeholder="Start Date" onFocus={(e) => (e.target.type = 'date')} />
            </div>

            <div className="divider"></div>

            <div className="input-group">
              <span className="icon">📅</span>
              <input type="text" placeholder="End Date" onFocus={(e) => (e.target.type = 'date')} />
            </div>

            <button className="search-btn">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT DIV: Swiper Slider */}
      <div className="hero-right">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="banner-slide slide-1">
              <div className="banner-content">
                <h2>REFER A FRIEND AND EARN</h2>
                <div className="amount">₹150</div>
                <p className="offer-title">Offer Details:</p>
                <ul>
                  <li>1. Your friend earns ₹50 once they sign up</li>
                  <li>2. You earn ₹150 once they ride with us</li>
                  <li>3. Credit to Freedo wallet</li>
                </ul>
                <p className="highlight">Limited time offer to earn <b>3x rewards</b></p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="banner-slide slide-2">
              <div className="banner-content">
                <h2>RENT FOR A MONTH</h2>
                <div className="amount">UP TO 30% OFF</div>
                <p className="offer-title">Monthly Subscription Deals:</p>
                <ul>
                  <li>1. Zero Maintenance Costs</li>
                  <li>2. Free Insurance Included</li>
                  <li>3. Doorstep Delivery Available</li>
                </ul>
                <p className="highlight">Book Now for <b>Long Term Savings</b></p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}



export {HeroBanner}