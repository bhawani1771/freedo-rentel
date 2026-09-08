import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './design.css';

function Review() {
  const reviewsData = [
    {
      id: 1,
      name: 'Prarabdh Mishra',
      platform: 'facebook',
      review: 'Riding Harley\'s legendary Fat Bob 114 was on my bucket list for a long, it was amazing to have the ease of renting it, g...',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Arya',
      platform: 'instagram',
      review: 'It was the best decision to rent the bike from Freedo. Their services were great, they provided full support in every as...',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Amit Dubey',
      platform: 'instagram',
      review: 'Three years with Freedo Rentals across India--seamless process, no deposits, excellent maintenance. Affordable rates, bea...',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Rohit Sharma',
      platform: 'facebook',
      review: 'Rented Himalayan for my Ladakh trip. Smooth engine, zero issues throughout the journey. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Neha Verma',
      platform: 'instagram',
      review: 'Super clean scooter delivery right at my doorstep in Jaipur. Excellent service and very helpful staff.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Vikas Soni',
      platform: 'facebook',
      review: 'Budget-friendly monthly rentals with zero deposit hassle. Freedo made daily commute super simple.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop'
    },
    {
      id: 7,
      name: 'Priya Joshi',
      platform: 'instagram',
      review: 'Amazing experience! Scooter condition was as good as brand new. Smooth booking process.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop'
    },
    {
      id: 8,
      name: 'Karan Malhotra',
      platform: 'facebook',
      review: 'Best bike rental platform in town. Quick document verification and prompt customer support.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop'
    }
  ];

  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">When Pictures Speaks</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
        className="reviews-swiper"
      >
        {reviewsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="review-card">
              <div className="review-img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="review-content">
                <div className="review-author">
                  <span className={`platform-icon ${item.platform}`}>
                    {item.platform === 'facebook' ? 'f' : '📷'}
                  </span>
                  <h4 className="author-name">{item.name}</h4>
                </div>
                <p className="review-text">{item.review}</p>
                <a href="#readmore" className="read-more">Read more</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


export {Review}