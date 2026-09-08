import React from 'react';
import './design.css';

function Card() {
  // Reliable Fallback Image URL
  const fallbackImg = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop";

  return (
    <section className="fleet-section">
      <h2 className="fleet-heading">Renting Fleet</h2>

      {/* Tabs Filter */}
      <div className="fleet-tabs">
        <button className="tab-btn active">Show All</button>
        <button className="tab-btn">Bikes</button>
        <button className="tab-btn">Scooters</button>
      </div>

      {/* Vehicle Grid */}
      <div className="fleet-grid">
        
        {/* Card 1 */}
        <div className="vehicle-card">
          <div className="card-image-container">
            <img 
              src="https://freedo.rentals/images/bikes/glamour.png" 
              alt="Glamour" 
              onError={(e) => { 
                e.target.onerror = null; // Loop rokne ke liye
                e.target.src = fallbackImg; 
              }}
            />
          </div>
          <div className="card-info">
            <h3 className="vehicle-title">
              <span className="brand">HERO</span> Glamour
            </h3>
            <div className="card-details-row">
              <div className="price-tag">₹279</div>
              <div className="features-group">
                <span className="feature-item">
                  <span className="icon">🛵</span> KM Packages <span className="info-icon">i</span>
                </span>
                <span className="feature-item">
                  <span className="icon">🛡️</span> Zero Deposit Fee
                </span>
              </div>
            </div>
            <button className="book-btn">Book Vehicle</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="vehicle-card">
          <div className="card-image-container">
            <img 
              src="https://freedo.rentals/images/bikes/hf-deluxe.png" 
              alt="HF Deluxe" 
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = fallbackImg; 
              }}
            />
          </div>
          <div className="card-info">
            <h3 className="vehicle-title">
              <span className="brand">HERO</span> HF Deluxe
            </h3>
            <div className="card-details-row">
              <div className="price-tag">₹499</div>
              <div className="features-group">
                <span className="feature-item">
                  <span className="icon">🛵</span> KM Packages <span className="info-icon">i</span>
                </span>
                <span className="feature-item">
                  <span className="icon">🛡️</span> Zero Deposit Fee
                </span>
              </div>
            </div>
            <button className="book-btn">Book Vehicle</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="vehicle-card">
          <div className="card-image-container">
            <img 
              src="https://freedo.rentals/images/bikes/super-splendor.png" 
              alt="Super Splendor" 
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = fallbackImg; 
              }}
            />
          </div>
          <div className="card-info">
            <h3 className="vehicle-title">
              <span className="brand">HERO</span> Super Splendor
            </h3>
            <div className="card-details-row">
              <div className="price-tag">₹499</div>
              <div className="features-group">
                <span className="feature-item">
                  <span className="icon">🛵</span> KM Packages <span className="info-icon">i</span>
                </span>
                <span className="feature-item">
                  <span className="icon">🛡️</span> Zero Deposit Fee
                </span>
              </div>
            </div>
            <button className="book-btn">Book Vehicle</button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="vehicle-card">
          <div className="card-image-container">
            <img 
              src="https://freedo.rentals/images/bikes/splendor-ismart.png" 
              alt="Splendor i Smart" 
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = fallbackImg; 
              }}
            />
          </div>
          <div className="card-info">
            <h3 className="vehicle-title">
              <span className="brand">HERO</span> Splendor i Smart
            </h3>
            <div className="card-details-row">
              <div className="price-tag">₹499</div>
              <div className="features-group">
                <span className="feature-item">
                  <span className="icon">🛵</span> KM Packages <span className="info-icon">i</span>
                </span>
                <span className="feature-item">
                  <span className="icon">🛡️</span> Zero Deposit Fee
                </span>
              </div>
            </div>
            <button className="book-btn">Book Vehicle</button>
          </div>
        </div>

      </div>

      {/* Show More Button */}
      <div className="show-more-container">
        <button className="show-more-btn">Show More</button>
      </div>
    </section>
  );
}

export { Card };