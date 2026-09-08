import React from 'react';
import './design.css';

function Footer() {
  const cities = [
    'Bengaluru', 'Bhubaneswar', 'Coorg', 'Dehradun', 'Delhi', 'Faridabad',
    'Ghaziabad', 'Goa', 'Gokarna', 'Greater Noida', 'Gurugram', 'Haridwar',
    'Hyderabad', 'Jaipur', 'Jaisalmer', 'Kasol', 'Kolkata', 'Kullu',
    'Lucknow', 'Manali', 'Mangaluru', 'Mussoorie', 'Mysuru', 'Noida',
    'Patna', 'Port Blair', 'Rishikesh', 'Shimla', 'Tirupati', 'Udaipur',
    'Vadodara', 'Vijayawada', 'Visakhapatnam'
  ];

  return (
    <footer className="freedo-footer">
      <div className="footer-overlay">
        <div className="footer-container">

          {/* SECTION 1: SEO TEXT CONTENT */}
          <div className="seo-content-section">
            <h2 className="seo-main-title">Explore Best Two-Wheelers On Rent</h2>
            <p>
              Getting around in busy cities such as Delhi NCR, Gurgaon, Bangalore, Noida, Vijayawada and Jaipur can be quite a task. Given the large crowds and busy streets, it can be pretty challenging. Rest assured, even for a short day excursion, renting a bike can be a mutually beneficial arrangement. Choosing scooter and bike rentals provides a convenient solution to the fast-paced city life.
            </p>

            <h3>Get Premium Bike and Scooter Rentals at Freedo!!</h3>
            <p>Freedo offer best bike rentals that are available for daily, weekly, and monthly basis for commutation. All of our two-wheelers are delivered by our diligent Freedo Champions. Our bikes undergo routine maintenance to ensure they provide the best value for money. It could be as follows:</p>
            <ul className="seo-list">
              <li>24-Hour Rental</li>
              <li>48-Hour Rental</li>
              <li>72-Hour Rental</li>
              <li>Weekly</li>
              <li>Monthly</li>
              <li>Quarterly</li>
            </ul>

            <h3>What sets Freedo Rental apart from other two-wheeler rental platforms?</h3>
            <p>The most important thing when renting a bike or scooter is having an affordable package, the newest model, and the ability to travel conveniently. All of these features are available with Freedo. You feel as though you are driving your own vehicle!</p>

            <h3>The Freedo Edge</h3>
            <ol className="seo-numbered-list">
              <li><strong>Not letting the hassle get in the way of owning a vehicle!</strong><br />Many travelers find owning a personal vehicle to be a hassle. From long documentation process to queuing up in RTOs all these processes are time consuming. Renting a bike allows you to ride without worrying about maintenance.</li>
              <li><strong>A wide range of two-wheeler models to choose from</strong><br />We offer a wide selection of bike and scooty rentals to suit your needs!</li>
              <li><strong>Faster, easier booking of bike rentals on the Freedo App</strong><br />With Freedo App, you can easily book a bike or scooter hassle-free from the convenience of your home.</li>
              <li><strong>Affordable packages</strong><br />Rent a two-wheeler at affordable rates with zero upfront hassle.</li>
              <li><strong>Expert assistance in choosing bike rentals</strong><br />Choose your two-wheeler from our rentals services and ease your travel hassle greatly.</li>
            </ol>

            <h3>What makes Freedo Rentals a reliable option for bike and scooter rentals?</h3>
            <p>Freedo understands the diverse mobility demands of today's travelers. By offering smart, affordable, and accessible mobility options, we make travel within the city easy, affordable, convenient, and smooth.</p>
          </div>

          <hr className="footer-divider" />

          {/* SECTION 2: NAVIGATION & APP DOWNLOAD LINKS */}
          <div className="footer-nav-section">
            <div className="footer-brand-header">
              <div className="freedo-logo-box">
                <span className="logo-icon">🛵</span>
                <span className="logo-title">FREEDO</span>
                <span className="logo-sub">RENTALS</span>
              </div>
            </div>

            <div className="footer-links-grid">
              {/* Col 1 */}
              <div className="footer-col">
                <h4>COMPANY</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#blogs">Blogs</a></li>
                  <li><a href="#faq">FAQ's</a></li>
                </ul>

                <h4 className="app-title">DOWNLOAD OUR APP</h4>
                <div className="app-buttons">
                  <button className="app-btn">
                    <span className="btn-icon">🍎</span>
                    <div className="btn-text">
                      <small>Available on the</small>
                      <strong>App Store</strong>
                    </div>
                  </button>
                  <button className="app-btn highlight">
                    <span className="btn-icon">▶</span>
                    <div className="btn-text">
                      <small>Get it on</small>
                      <strong>Google Play</strong>
                    </div>
                  </button>
                </div>
              </div>

              {/* Col 2 */}
              <div className="footer-col">
                <h4>FREEDO SUPPORT</h4>
                <p>contact@freedo.rentals</p>
                <p>+91 95998 19940</p>
                <a href="#chat" className="chat-link">Chat With Us</a>
              </div>

              {/* Col 3 */}
              <div className="footer-col">
                <h4>POLICIES</h4>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Col 4 */}
              <div className="footer-col">
                <h4>CONTACT US</h4>
                <p>Freedo Rentals, Plot No: 47, Udyog Vihar, Phase 4, Sector 18, Gurugram - 122015, Haryana</p>
                <a href="#touch" className="touch-link">Get In Touch</a>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          {/* SECTION 3: CITIES GRID */}
          <div className="footer-cities-section">
            <h3 className="cities-heading">Freedo Cities</h3>
            <div className="cities-grid">
              {cities.map((city, idx) => (
                <div key={idx} className="city-item">
                  <span className="pin-icon">📍</span> Bike rent in <strong>{city}</strong>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


export {Footer}